const splitWord = (word) => word.split('').map((letter) => ({ letter, isGuessed: false }));

export default splitWord;
