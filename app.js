for (let a = 1; a < 51; a++)

if (a%10==0&&a%4==0) {
    console.log('今'+a+'回ループしました。');
    console.log('4で割れる数です。'+a);
} else if (a==50) {
    console.log('今'+a+'回ループしました。');
    alert('50回カウントが終わりました。');
} else if (a%10==0) {
    console.log('今'+a+'回ループしました。');
} else if (a%4==0) {
    console.log('4で割れる数です。'+a);
}

