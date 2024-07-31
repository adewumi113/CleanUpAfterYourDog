
//https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/javascript
/* 
You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

If you do, return 'Clean', else return 'Cr@p'.

Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.
 */
//For example:
//bags = 2
//cap = 2
/* 
x (or garden) =
[[ _ , _ , _ , _ , _ , _ ],
 [ _ , _ , _ , _ , @ , _ ],
 [ @ , _ , _ , _ , _ , _ ]]
 returns 'Clean'
*/
function crap(x, bags, cap){
    let totalCapacity = bags * cap //total capacity of bags
    let crapCount = 0
    //iterate over garden rows
    for (let row of x){ 
        for (let item of row){
            if (item === 'D'){ //if dog is present in the garden, we can't clean the garden, return Dog!!
                return 'Dog!!'
            }else if(item === '@'){ 
                crapCount++ //otherwise count the number of cr@p
            }
        }
    }
    if (bags === 0){ //if there are no bags, we can't pick the cr@p, return cr@p
        return "Cr@p"
    }
    //compare cr@pCount to the total capacity
    if (crapCount <= totalCapacity){ //if the total capacity is equal to or greater than number of cr@ps, return clean
        return "Clean"
    }else{
        return "Cr@p" //Not enough capacity, return cr@p
    }
}