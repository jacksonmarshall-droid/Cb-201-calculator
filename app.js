function  add() {
    const firstval=  Number(document.getElementById("num1").value)
    console.log(firstval)

    const secondval= Number(document.getElementById("num2").value)
    console.log(secondval)

    // variable that is sum of numbers
    const answer=(firstval + secondval)
    console.log(answer)
    document.getElementById("answer").textContent=answer
}
function subtract(){
    const firstval=  Number(document.getElementById("num1").value)
    console.log(firstval)

    const secondval= Number(document.getElementById("num2").value)
    console.log(secondval)

    const difference=(firstval-secondval)
    console.log(difference)
    document.getElementById("difference").textContent=difference
}