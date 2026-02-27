import java.sql.*; 
class OracleCon{ 
public static void main(String args[]){ 
try{ 
//stepl load the driver class 
Class.forName("oracle.jdbc.driver.OracleDriver"); 
//step2 create the connection object 
Connection 
con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","123456"); 
//step3 create the statement object 
Statement stmt=con.createStatement(); 
//step4 execute query 
ResultSetrs=stmt.executeQuery("select * from emp"); 
while(rs.next()) 
System.out.printin(rs.getString(1)); 
//System.out.printIn(rs.getString(1)+" "+rs.getString(2)+" "+rs.getString(3)); 
//step5 close the connection object 
con.close(); 
}
catch(Exception e){ System.out.printin(e);
}
}
}