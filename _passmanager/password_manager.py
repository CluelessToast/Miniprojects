from cryptography.fernet import Fernet


def write_key():
    key=Fernet.generate.key()
    with open("key.key", "wb") as key_file:
        key_file.write(key)

def load_key():
    file= open("key.key", "rb")
    key= file.read()
    file.close()
    return key


master_pwd= input("What is the master password?")
key=load_key() + master_pwd.encode()
fer= Fernet(key)
def view():
    with open('password.text', 'r') as f:
        for line in f.readlines():
            data = line.rstrip()
            user, passw = data.split("|")
            print("User: ", user, "| Password: ",(fer.decrypt(passw.encode())))
def add():
    name=input ("Account Name: ")
    pwd= input("Password: ")

    with open('password.text', 'a') as f:
        f.write(name + "|" + (fer.encrypt(pwd.encode()).decode()) +'\n')

while True:
    mode= input("Would you like to add a new password or view existing ones?. Press q to quit. ")

    if mode == "q":
        break


    if mode.lower() == "view":
        view()
    elif mode.lower()=="add":
        add()

    else:
        print("Invalid mode.")
        continue
