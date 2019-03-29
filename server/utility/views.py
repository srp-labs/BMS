from django.shortcuts import render
from django.core.mail import EmailMessage

# Create your views here.
def send_otp():

	code = '2345'
	email = 'arijit.1790@gmail.com'
	msg = 'Your Verification Code for React DJ is ' + '\'' + str(code) + '\'' + '. Please use this verification code for registration.\n\n' + 'NOTE: This is a system generated e-mail and please do not reply.\n\n' + 'Regards, \n' + 'Team React DJ'
	email_msg = EmailMessage('React DJ: Verification Code',msg,to=[email])
	try :
		email_msg.send()
		print("SUCCESS")

	except Exception as e:
		print(e)
		print("FAILED")


    