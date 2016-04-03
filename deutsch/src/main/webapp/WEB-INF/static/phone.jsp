<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!doctype html>
<html>
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <title>Phones</title>
</head>
<body>

<h2>Phone</h2>

<form action="/s?id=${phone.phoneId}&action=save" method="post">
    <table>
        <tr>
            <td>id</td>
            <td><c:out value="${phone.phoneId}"/></td>
        </tr>
        <tr>
            <td>title</td>
            <td><input type="text" value="${phone.title}"/></td>
        </tr>
        <tr>
            <td>guarantee time (years)</td>
            <td><input type="number" value="${phone.guarantee_time}"></td>
        </tr>
        <tr>
            <td>description</td>
            <td><textarea><c:out value="${phone.description}"/></textarea></td>
        </tr>
        <tr>
            <td colspan="2"><input type="submit"/></td>
        </tr>
    </table>

</form>

</body>
</html>
