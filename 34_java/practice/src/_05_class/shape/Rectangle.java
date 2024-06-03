package _05_class.shape;

public class Rectangle extends Shape{
    private int width;
    private int height;
    public Rectangle(String color, String type, int width, int height){
        super(color,type);
        this.width =width;
        this.height =height;
    }

    public int getWidth() {
        return width;
    }

    public int getHeight() {
        return height;
    }

    @Override
    void calculateArea() {
       int area = (int) (this.width * this.height);
        System.out.println("도형의 넓이: "+ area);
    }
}
