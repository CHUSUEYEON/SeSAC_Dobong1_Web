package _05_class.shape;

public class Circle extends Shape{
    private int radius;
    public Circle(String color, String type, int radius){
        super(color,type);
        this.radius =radius;
    }

    public double getRadius() {
        return radius;
    }


    @Override
    void calculateArea() {
        double area = (double) (this.radius * this.radius) * Math.PI;
        System.out.println("도형의 넓이: "+ area);
    }
}
