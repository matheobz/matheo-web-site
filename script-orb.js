document.addEventListener('DOMContentLoaded', () => {
    const orb1 = document.querySelector('.orb1');
    const orb2 = document.querySelector('.orb2');
    const orb3 = document.querySelector('.orb3');
    const orb4 = document.querySelector('.orb4');
    const backgroundOrb = document.querySelector('.background-orb');

    let x1 = 50, y1 = 100, dx1 = 0.2, dy1 = 0.1;
    let x2 = backgroundOrb.clientWidth - 200, y2 = 50, dx2 = -0.15, dy2 = 0.2;
    let x3 = backgroundOrb.clientWidth - 150, y3 = backgroundOrb.clientHeight - 200, dx3 = -0.3, dy3 = -0.2;
    let x4 = 100, y4 = backgroundOrb.clientHeight - 150, dx4 = 0.25, dy4 = -0.2; 

    function updateOrbPosition(orb, x, y) {
        orb.style.left = `${x}px`;
        orb.style.top = `${y}px`;
    }

    function ensureOrbsStayWithinBounds() {
        const containerRect = backgroundOrb.getBoundingClientRect();

        [[x1, y1], [x2, y2], [x3, y3], [x4, y4]].forEach((coords, index) => {
            let [x, y] = coords;
            const orb = document.querySelector(`.orb${index + 1}`);
            const orbRect = orb.getBoundingClientRect();

            if (x + orbRect.width > containerRect.width) x = containerRect.width - orbRect.width;
            if (x < 0) x = 0;
            if (y + orbRect.height > containerRect.height) y = containerRect.height - orbRect.height;
            if (y < 0) y = 0;

            eval(`x${index + 1} = x;`);
            eval(`y${index + 1} = y;`);

            updateOrbPosition(orb, x, y);
        });
    }

    function animateOrb(orb, idx) {
        let [x, y, dx, dy] = [eval(`x${idx}`), eval(`y${idx}`), eval(`dx${idx}`), eval(`dy${idx}`)];

        x += dx;
        y += dy;

        const orbRect = orb.getBoundingClientRect();
        const containerRect = backgroundOrb.getBoundingClientRect();

        if (x <= 0 || x + orbRect.width >= containerRect.width) eval(`dx${idx} = -dx${idx}`);
        if (y <= 0 || y + orbRect.height >= containerRect.height) eval(`dy${idx} = -dy${idx}`);

        eval(`x${idx} = x;`);
        eval(`y${idx} = y;`);

        updateOrbPosition(orb, x, y);

        requestAnimationFrame(() => animateOrb(orb, idx));
    }

    const resizeObserver = new ResizeObserver(() => {
        ensureOrbsStayWithinBounds();
    });
    resizeObserver.observe(backgroundOrb);

    animateOrb(orb1, 1);
    animateOrb(orb2, 2);
    animateOrb(orb3, 3);
    animateOrb(orb4, 4);
});
