field.onclick = function(event) {
    let fieldCoords = this.getBoundingClientRect();
   let clickCoords = {
      top: event.clientY - fieldCoords.top - field.clientTop - click.clientHeight / 2,
      left: event.clientX - fieldCoords.left - field.clientLeft - click.clientWidth / 2
    };
    if (clickCoords.top < 0) clickCoords.top = 0;
    if (clickCoords.left < 0) clickCoords.left = 0;
    if (clickCoords.left + click.clientWidth > field.clientWidth) {
        clickCoords.left = field.clientWidth - click.clientWidth;
    }
    if (clickCoords.top + click.clientHeight > field.clientHeight) {
        clickCoords.top = field.clientHeight - click.clientHeight;
    }
    click.style.left = clickCoords.left + 'px';
    click.style.top = clickCoords.top + 'px';
  }
