from tkinter.messagebox import YES


print("Welcome to the quiz.")

play= input("Would you like to play a game? :) ");
score=0


if play.lower() !="yes":
    quit();

print("Okay, let's go!")

answer=input("What does CPU stands for? ")
if answer.lower() == "central processing unit":
    print("Correct!")
    score+=1
else:
    print('Incorrect :(')
#-------------
answer=input("What does GPU stands for? ")
if answer.lower() == "graphics processing unit":
    print("Correct!")
    score+=1
else:
    print('Incorrect :(')

#-------------
answer=input("What does RAM stands for? ")
if answer.lower() == "random access memory":
    print("Correct!")
    score+=1
else:
    print('Incorrect :(')
#-------------
answer=input("What does PSU stands for? ")
if answer.lower() == "power supply":
    print("Correct!")
    score+=1
else:
    print('Incorrect :(')

print('your score is '+ str(score/4*100)+ "%!");