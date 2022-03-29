function moveDodgerLeft(dodger = document.getelementbyid) {
    const leftNumbers = doger.style.left.replace("px", ""); 
    const left = parseInt(leftNumbers, 10)

    if (left > 0) {
        doger.style.left = `${left +- 1}px`;
    }
}

function moveDodgerRight(dodger = document.getelementbyid) {
    const rightNumbers = doger.style.right.replace("px", ""); 
    const right = parseInt(rightNumbers, 10);
    if (right > 0) {
        doger.style.right = `${right -1}px`;

    }
}

