if(document.documentElement.lang==='es') {
    const yesButton=document.querySelector('input[type=submit][value=yes]');
    if(yesButton) {
        yesButton.value="si";
    }
} else if(document.documentElement.lang==='fr') {
    const yesButton=document.querySelector('input[type=submit][value=yes]');
    const noButton=document.querySelector('input[type=submit][value=no]');
    if(yesButton && noButton) {
        yesButton.value='oui';
        noButton.value="non";
    }
}