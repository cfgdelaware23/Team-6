import smtplib
import schedule
import time
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

sender_email = "sample@gmail.com"
sender_password = 
recipient_email = "testl@example.com"
subject = "Scheduled Email"
message_body = "This is a scheduled email."

smtp_server = "smtp.gmail.com"
smtp_port = 587

def send_email():
    try:
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        
        server.login(sender_email, sender_password)
        
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = recipient_email
        msg['Subject'] = subject
        msg.attach(MIMEText(message_body, 'plain'))
        
        server.sendmail(sender_email, recipient_email, msg.as_string())
        
        server.quit()
        
        print("Email sent successfully!")

    except Exception as e:
        print("An error occurred:", str(e))

schedule.every().day.at("10:00").do(send_email)

while True:
    schedule.run_pending()
    time.sleep(1)
