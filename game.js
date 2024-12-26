// 游戏的关卡数据
const levels = [
    {
        title: "戒烟第一天",
        question: "你刚开始戒烟，办公室里弥漫着烟味。你会怎么做？",
        choices: ["拒绝", "拿着烟微笑"],
        failReason: "压力太大了，一根烟应该没关系吧？",
        successMessage: "你做得对！第一天就坚持住了！"
    },
    {
        title: "工作压力",
        question: "你面临极大的工作压力，突然想吸烟。你会怎么做？",
        choices: ["休息片刻", "拿烟解压"],
        failReason: "任务没有变难，但烟雾似乎让一切都轻松了。",
        successMessage: "深呼吸，暂停一下，工作更高效了！"
    },
    {
        title: "聚会中的诱惑",
        question: "朋友聚会中，大家都在吸烟。你会怎么做？",
        choices: ["加入他们", "拒绝社交压力"],
        failReason: "社交压力太大，难道不该享受这份放松吗？",
        successMessage: "虽然困难，但你坚持住了，值得骄傲！"
    },
    {
        title: "情绪崩溃",
        question: "你和伴侣吵架，情绪低落。你会怎么做？",
        choices: ["出去散步", "点燃一根烟来冷静"],
        failReason: "情绪没能改善，但烟雾似乎给了你一时的安慰。",
        successMessage: "运动能帮助情绪恢复，继续保持！"
    },
    {
        title: "习惯性吸烟",
        question: "每当喝咖啡时，你都会想抽烟。今天你坐在咖啡店，手里拿着咖啡。你会怎么做？",
        choices: ["喝一口咖啡，放松自己", "先去吸烟再喝咖啡"],
        failReason: "咖啡不再是唯一的享受，烟草已经深深融入了你的生活。",
        successMessage: "没有烟草，咖啡也更美味！"
    },
    {
        title: "吃饭后的欲望",
        question: "饭后你总是想吸烟。你吃完晚餐后，应该怎么做？",
        choices: ["刷牙去", "吸烟一根"],
        failReason: "饭后吸烟已经变成了你的强烈习惯。",
        successMessage: "清新口气，戒烟更容易！"
    },
    {
        title: "电影中的吸烟场景",
        question: "你在电影院看电影，屏幕上有主角在吸烟。你会怎么做？",
        choices: ["转移注意力，集中在电影", "去走廊抽根烟"],
        failReason: "电影中的吸烟场景让你陷入了旧习惯。",
        successMessage: "电影更精彩，烟雾渐远！"
    },
    {
        title: "无聊时的诱惑",
        question: "你独自待在家里，觉得很无聊。你会怎么做？",
        choices: ["去健身房运动", "抽根烟消磨时间"],
        failReason: "无聊时，烟草似乎能填满所有空白。",
        successMessage: "运动带来全新的能量，烟雾渐远。"
    },
    {
        title: "生病时的戒烟诱惑",
        question: "你感冒了，感觉身体很不舒服。你会怎么做？",
        choices: ["坚持戒烟", "为了缓解不适，抽一根烟"],
        failReason: "生病时，吸烟似乎是唯一能带来短暂安慰的方式。",
        successMessage: "你的身体正在感谢你！"
    },
    {
        title: "烟友的邀请",
        question: "老朋友邀请你去一起抽烟。你会怎么做？",
        choices: ["拒绝朋友邀请", "去抽烟，但说好只抽一根"],
        failReason: "你知道这是一条滑坡，但它确实让你短暂地感到轻松。",
        successMessage: "你做得对，真正的朋友会支持你的选择！"
    }
];

let currentLevel = 0;

// 初始化游戏
function startGame() {
    displayLevel(levels[currentLevel]);
}

// 显示当前关卡
function displayLevel(level) {
    document.getElementById("level-title").textContent = level.title;
    document.getElementById("question").textContent = level.question;
    document.getElementById("choice1").textContent = level.choices[0];
    document.getElementById("choice2").textContent = level.choices[1];
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-btn").style.display = "none";
    
    // 绑定按钮点击事件
    document.getElementById("choice1").onclick = function () { handleChoice(level, 0); };
    document.getElementById("choice2").onclick = function () { handleChoice(level, 1); };
}

// 处理玩家选择
function handleChoice(level, choiceIndex) {
    const feedback = choiceIndex === 0 ? level.successMessage : level.failReason;
    document.getElementById("feedback").textContent = feedback;
    document.getElementById("next-btn").style.display = "inline-block";
}

// 进入下一关
function nextLevel() {
    currentLevel++;
    if (currentLevel < levels.length) {
        displayLevel(levels[currentLevel]);
    } else {
        document.getElementById("level-title").textContent = "恭喜你完成游戏！";
        document.getElementById("question").textContent = "";
        document.getElementById("choices").style.display = "none";
        document.getElementById("next-btn").style.display = "none";
    }
}

// 开始游戏
startGame();
