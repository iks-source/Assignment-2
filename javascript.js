var player = [0,0];


     var position = 0;

     for(;position < 25;)
     {

       for(var i=0; i<2; i++)
       {
         var die = (Math.floor(Math.random() * 6) + 1);
         document.write("Player " + (i+1) + " rolling the die :  " + die+ "  ");
         player[i] = player[i] + die;
            if(player[i]==15)
             {
               player[i] = 5;
                 document.write("Its a snake!!!! moving down to position 5" + "<br>");
             }

           else if(player[i]==23)
             {
               player[i] = 16;
                 document.write("Its a snake!!!! moving down to position 16" + "<br>");
             }

           else if(player[i]==8)
             {
               player[i] = 15;
                 document.write("Wow!! you found the ladder, moving up to position 15" + "<br>");
             }
          else if(player[i]==19)
             {
               player[i] = 24;
                 document.write("Wow!! you found the ladder, moving up to position 24" + "<br>");
             }

           else {
             document.write("New position is " + player[i] + "<br>");
           }

         if(player[i] > 24)
             {
                 document.write("<br>");
                 document.write("Player " + (i+1)+ " has won the Snake and Ladder game" + "<br>");
                 break;
             }
       }


       document.write("<br>");


       if (player[0] > player[1])
       {
         position = player[0];
       }
       else {
         position = player[1]
       }

     }

       document.write("The End" + "<br>");
