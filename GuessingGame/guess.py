import random

top_of_range=input("Type a number: ")

if top_of_range.isdigit():
    top_of_range=int(top_of_range)
    if top_of_range<=0:
        print("type number larger than zero.")
        quit()
else:
    print("please type a number next time")
    quit()

random_number= random.randint(0, top_of_range)
#print(random_number)
guesses=0

while True:
    guesses+=1
    user_guess=input("make a guess! ")

    if user_guess.isdigit():
        user_guess=int(user_guess)

    else:
        print("please type a number next time")
        quit()
        continue

    if user_guess ==random_number:
        print("you guessed right!")
        break
    
    elif user_guess>random_number:
        print("you were above the number!")
    else:
        print("you were below the number!")

print("You got it in"+guesses+'guesses!')