<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
    <head>
        <title>Danh sách bài hát</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Danh sách bài hát 🎶</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Tiêu đề</th>
                <th>Ca sĩ</th>
                <th>Album</th>
                <th>Thời lượng</th>
            </tr>
            <c:forEach var="song" items="${songs}">
                <tr>
                    <td>${song.id}</td>
                    <td>${song.name}</td>
                    <td>${song.duration}</td>
                    <td>${song.path}</td>
                    <td>${song.image} phút</td>
                </tr>
            </c:forEach>
        </table>
    </body>
</html>
