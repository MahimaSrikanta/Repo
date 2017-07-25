class Main{
    public static void main(String[] args){
      StringBuffer a = new StringBuffer("mahi");
      a.append("sri");
      String s = new String("hello");
      String r = s.concat("sri");
      System.out.println(a);
    }
}

class Main{
    public static void main(String[] args){
    String s = new String("hi");
    String a = new String("hi");
      System.out.println(a == s); // false
    System.out.println(a.equals(s)); // true
      
    // String s = "hi";
    // String a = "hi";
    //   System.out.println(a == s); // true
    //   System.out.println(a.equals(s)); // true
    }
}