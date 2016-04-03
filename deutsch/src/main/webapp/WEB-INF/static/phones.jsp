<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!doctype html>
<html>
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <title>Phones</title>
</head>
<body>

<h2>All phones</h2>

<table>
    <tr>
        <th>id</th>
        <th>title</th>
        <th>guarantee time (years)</th>
        <th>description</th>
        <th>&nbsp;</th>
    </tr>

    <c:forEach var="phone" items="${phones}">
        <tr>
            <td><c:out value="${phone.phoneId}"/></td>
            <td><c:out value="${phone.title}"/></td>
            <td><c:out value="${phone.guarantee_time}"/></td>
            <td>description</td>
            <td><a href="/s?id=${phone.phoneId}">update</a></td>
        </tr>
    </c:forEach>


</table>

</body>
</html>
