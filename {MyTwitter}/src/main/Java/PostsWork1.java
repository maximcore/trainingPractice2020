import com.sun.net.httpserver.HttpHandler;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "PostsWork1")
public class PostsWork1 extends HttpServlet {
    PostContainer postContainer = new PostContainer(20);


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String[] url = request.getRequestURI().split("/");
        PrintWriter pw = response.getWriter();
        if (url.length == 3 && url[2].equals("search")) {
            pw.println(postContainer.showPage());
        }
        pw.close();
    }

    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String stringId = request.getParameter("id");
        boolean found = false;
        int id = Integer.parseInt(stringId);
        PrintWriter pw = response.getWriter();
        for(int i = 0;i<postContainer.posts.size();i++){
            if(postContainer.posts.get(i).id == id){
                postContainer.deletePost(id);
                found = true;
            }
        }
        if(found){
            pw.println("{\"status\" : deleted}");
        }
        else {
            pw.println("{\"status\" : not found}");
        }
        pw.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    String postId = request.getParameter("id");
    boolean found = false;
    int id = Integer.parseInt(postId);
    int size = postContainer.posts.size();
    PrintWriter pw = response.getWriter();
    for(int i = 0;i<size;i++){
        if(postContainer.posts.get(i).id == id){
            pw.println(postContainer.posts.get(i));
            pw.println("{\"status\" : found}");
            found = true;
        }
    }
    if(!found){
        pw.println("{\"status\" : not found}");
    }
    pw.close();
    }
}
