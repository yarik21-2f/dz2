let seconds = 0;

const interval = setInterval(() => {
        seconds++;
        console.log("С момента запуска страницы прошло" + " "+ seconds);
        if(seconds === 60){
            clearInterval(interval);
        }
     }, 1000)

     


     //задание2
     const box = document.querySelector(".block2")
    let positionX = 0
    let positionY = 0
    let positionZ = 0

    const intervalBox = () =>{
        if(positionX <= 440){
            positionX +=16
            box.style.left = `${positionX}px`
            setTimeout(intervalBox,100)
        }else if(positionY <= 440){
            positionY +=16
            box.style.top =`${positionY}px`
            setTimeout(intervalBox,100)
        }else if (positionX === 440 && positionY === 440){
            positionZ -= 16
            box.style.left = `${positionZ}px`
            setTimeout(intervalBox,100)
        }
    }
    intervalBox()

