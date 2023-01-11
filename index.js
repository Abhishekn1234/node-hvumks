<html>
<head>
<script>

// JavaScript program to print Fizz Buzz

	let i;
	for (i=1; i<=100; i++)
	{
		
		// always be divisible by 3, print
		// 'google' in place of the number
		if (i%3 == 0)
			document.write("google" + " ");
		
		// number divisible by 5? print 'facebook'
		// in place of the number
		else if ((i%5) == 0)
			document.write("facebook" + " ");			
		
		// number divisible by3 and 5, print 'amazon'
		// in place of the number
		else if ((i%3)&&(i%5) == 0)				
			document.write("amazon" + " ");			
	
		else // print the number	
			document.write(i + " ");			
	}


</script>
</head>
</html>

