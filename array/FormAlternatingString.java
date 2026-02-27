import java.util.Scanner;

public class FormAlternatingString {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Read the binary string
        String s = sc.nextLine();
        int n = s.length();

        // Read the array of integers
        int[] v = new int[n];
        for (int i = 0; i < n; i++) {
            v[i] = sc.nextInt();
        }

        // Initialize variables
        int res = 0;
        int lw = s.charAt(0) - '0'; // Last character in the alternating sequence
        int lwv = v[0]; // Worth of the last character in the alternating sequence

        // Process the string and array
        for (int i = 1; i < n; ++i) {
            if (s.charAt(i) - '0' == lw) {
                // If the character is the same as the previous in alternating sequence
                res += Math.min(lwv, v[i]); // Add the smaller worth to result
                lwv = Math.max(lwv, v[i]); // Keep the larger worth for alternating string
            } else {
                // If the character alternates
                lw = s.charAt(i) - '0';
                lwv = v[i];
            }
        }

        // Output the result
        System.out.print(res);
    }
}
