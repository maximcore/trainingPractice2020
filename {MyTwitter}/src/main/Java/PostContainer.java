import java.util.ArrayList;
import java.util.List;

public class PostContainer {
    List<PostHandler> posts;
    int pageNumber = 1;
    int size;

    public PostContainer(int amountOfPosts){
        size = amountOfPosts;
        posts = new ArrayList();
        for(int i = 0;i<amountOfPosts;i++){
            posts.add(new PostHandler((i+1),"the description of post number " + (i+1),(i+1)+"-0"+(Math.abs(11-i))+"-2020",
            "author" + (i+1),"www.usernumber"+(i+1)+"photo"));
           // System.out.println(posts.get(i));
        }
    }

    public PostHandler getPost(int id){
        int size = posts.size();
        for(int i = 0;i<size;i++){
            if(posts.get(i).id == id){
                return posts.get(i);
            }
        }
        //System.out.println("not found");
        return null;
    }

    public void deletePost(int id){
        int size = posts.size();
        if(id < 1){
            return;
        }
        for(int i = 0;i<size;i++){
            if(posts.get(i).id == id){
            posts.remove(i);
            size--;
            }
        }
    }

    public List<PostHandler> showPage(){
        List<PostHandler> page = new ArrayList<>();
        int numberOfPage = pageNumber*10;
        if(posts.size()>=numberOfPage){
            for(int i = (pageNumber-1)*10;i<numberOfPage;i++){
                page.add(posts.get(i));
            }
        }
        return page;
    }

}
