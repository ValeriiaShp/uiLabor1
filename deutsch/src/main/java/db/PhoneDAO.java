package db;

import model.Phone;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class PhoneDAO {

    private static String T_PHONE = "phone";
    private static String F_PHONE_ID = "phone_id";
    private static String F_TITLE = "title";
    private static String F_GUARANTEE_TIME = "guarantee_time";
    private static String F_DESCRIPTION = "description";

    private static final DBConnection dbConnection = new DBConnection();

    public Phone[] findAll() {
        try {
            String sqlQuery = "SELECT " + F_PHONE_ID + ", " + F_TITLE + ", " + F_GUARANTEE_TIME + ", " + F_DESCRIPTION + " FROM " + T_PHONE + ";";
            System.out.println("SQL: " + sqlQuery);
            Statement statement = dbConnection.getSqlConnection().createStatement();
            ResultSet resultSet = statement.executeQuery(sqlQuery);
            List<Phone> phoneList = new ArrayList<Phone>();
            while (resultSet.next()) {
                Phone phone = new Phone();
                phone.setPhoneId(resultSet.getLong(F_PHONE_ID));
                phone.setTitle(resultSet.getString(F_TITLE));
                phone.setGuarantee_time(resultSet.getByte(F_GUARANTEE_TIME));
                phone.setDescription(resultSet.getString(F_DESCRIPTION));
                System.out.println("Find all: " + phone);
                phoneList.add(phone);
            }

            return phoneList.toArray(new Phone[phoneList.size()]);

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    public Phone findById(long id) {
        try {
            String sqlQuery = "SELECT " + F_PHONE_ID + ", " + F_TITLE + ", " + F_GUARANTEE_TIME + ", " + F_DESCRIPTION + " FROM " + T_PHONE + " WHERE " + F_PHONE_ID + "=? ;";
            PreparedStatement statement = dbConnection.getSqlConnection().prepareStatement(sqlQuery);
            statement.setLong(1, id);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                Phone phone = new Phone();
                phone.setPhoneId(resultSet.getLong(F_PHONE_ID));
                phone.setTitle(resultSet.getString(F_TITLE));
                phone.setGuarantee_time(resultSet.getByte(F_GUARANTEE_TIME));
                phone.setDescription(resultSet.getString(F_DESCRIPTION));
                return phone;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    public boolean update(Phone phone) {
        try {
            String sqlQuery = "UPDATE " + T_PHONE + " SET " + F_TITLE + "='?', " + F_GUARANTEE_TIME + "=?, " + F_DESCRIPTION + " = '?' WHERE " + F_PHONE_ID + " = ? ;";
            PreparedStatement statement = dbConnection.getSqlConnection().prepareStatement(sqlQuery);
            statement.setString(1, phone.getTitle());
            statement.setByte(2, phone.getGuarantee_time());
            statement.setString(3, phone.getDescription());
            statement.setLong(4, phone.getPhoneId());

            return statement.executeUpdate() > 0;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    private static class DBConnection {

        static {
            try {
                Class.forName("org.postgresql.Driver");
            } catch (ClassNotFoundException e) {
                System.err.println("Driver not found");
                System.exit(2);
            }
        }

        private Connection sqlConnection;

        public Connection getSqlConnection() {
            return sqlConnection;
        }

        private DBConnection() {
            try {
                sqlConnection = DriverManager.getConnection(
                        "jdbc:postgresql://localhost:5432/phone", "postgres", "postgres");
            } catch (SQLException e) {
                System.err.println("Could not establish db connection");
                System.exit(2);
            }
        }

    }
}
