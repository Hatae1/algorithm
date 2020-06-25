import java.util.Scanner;

public class BeakJoon2523 {
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int standardNumber = sc.nextInt();
        String star = "";

        for(int i=0; i<standardNumber; i++){
            star += "*";
        }
                
        for(int i=0; i<standardNumber*2-1; i++){

            System.out.println(star.substring( Math.abs(i+1-standardNumber)));
            
        }
    }
}