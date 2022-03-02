import smtplib

server=smtplib('smtp.email.com', 25)

server.ehlo()

server.login('wanna@mail.com','wannabehacker1!')