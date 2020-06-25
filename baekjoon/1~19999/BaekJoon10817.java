import java.util.Arrays;
import java.util.Scanner;

public class BaekJoon10817 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int inputArray[] = new int[3];
        
        inputArray[0] = sc.nextInt();
        inputArray[1] = sc.nextInt();
        inputArray[2] = sc.nextInt();
        
        Arrays.sort(inputArray);

        System.out.println(inputArray[1]);
        
    }
}