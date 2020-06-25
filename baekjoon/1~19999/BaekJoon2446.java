import java.util.Scanner;

public class BaekJoon2446 {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        int standardNumber = sc.nextInt();
 
        for(int i=0; i<standardNumber*2-1; i++){

            System.out.println( Math.abs(i-standardNumber) );
            
        }

    }
}