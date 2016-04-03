package controller;

import db.PhoneDAO;
import model.Phone;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class PhoneServlet extends HttpServlet {

    private static final PhoneDAO phoneDAO = new PhoneDAO();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("doGet here ");

        if (req.getParameter("id") != null) {
            findById(req, resp);
        } else {
            findAll(req, resp);
        }

    }

    private void findAll(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("phones", phoneDAO.findAll());
        System.out.println("WTF path: /WEB-INF/static/phones.jsp");
        request.getRequestDispatcher("/WEB-INF/static/phones.jsp").forward(request, response);
    }

    private void findById(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("findById");

        String idString = request.getParameter("id");

        try {
            Long id = Long.parseLong(idString);
            Phone phone = phoneDAO.findById(id);

            if (phone != null) {
                request.setAttribute("phone", phone);
                System.out.println("WTF path: /WEB-INF/static/phone.jsp");
                request.getRequestDispatcher("/WEB-INF/static/phone.jsp").forward(request, response);
            }


        } catch (NumberFormatException e) {
            System.err.println("Error-horror: NumberFomatException");

            /** TODO redirect to error.jsp */
        }


    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doPost(req, resp);
    }

}
