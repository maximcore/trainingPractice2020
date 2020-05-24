import java.util.List;

public class PostHandler {

    int id;
    String description;
    String createdAt;
    String author;
    String photoLink;

    public PostHandler(int id, String description, String createdAt, String author, String photoLink){
        this.id = id;
        this.description = description;
        this.createdAt = createdAt;
        this.author = author;
        this.photoLink = photoLink;
    }

    @Override
    public String toString() {
        return "{'id': " + id + ", 'description': " + description + ", 'created At': " + createdAt + ", 'author': " + author +
        ", 'photoLink': " + photoLink + "};";
    }

}
