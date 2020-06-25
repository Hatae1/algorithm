import java.util.Scanner;

public class BeakJoon2523 {
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int inputNumber = sc.nextInt();
        String star = "";
        
        int standardNumber = inputNumber*2;

        for(int i=0; i<standardNumber; i++){
            star += "*";
        }
                
        for(int i=0, k=1; i<=standardNumber-1; i++,k+=2){
            
            int loop = Math.abs((k)-(standardNumber));
            
            int blank = (standardNumber-loop)/2;

            for(int j=0; j<blank; j++){
                System.out.print(" ");
            }

            for(int j=0; j<loop; j++){
                System.out.print("*");
            }
            System.out.println();
            
        }
    }
}