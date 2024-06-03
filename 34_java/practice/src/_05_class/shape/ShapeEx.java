package _05_class.shape;

public class ShapeEx {
    public static void main(String[] args) {
        Circle c = new Circle("Red", "Circle", 5);
        System.out.println("=======" + c.getType() + " 도형의 정보");
        System.out.println("도형의 색상: "+ c.getColor());
        c.calculateArea();

        Rectangle r = new Rectangle("Blue", "Rectangle", 3,4);
        System.out.println("=======" + r.getType() + " 도형의 정보");
        System.out.println("도형의 색상: "+ r.getColor());
        r.calculateArea();
    }
}
