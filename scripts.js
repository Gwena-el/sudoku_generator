// numbers array
var all = [];
var subA = [];
var subB = [];
var subC = [];
var subD = [];
var subE = [];
var subF = [];
var subG = [];
var subH = [];
var subI = [];
// level difficulty
var difficulty = 32;
// generate sub matrix with index
for (var y = 0; y < 9; ++y) {
    for (var x = 0; x < 9; ++x) {
        var n = 0;
        var p;
        if (x < 3 && y < 3) {
            subA.push(getIndex(x, y));
            p = 1;
        }
        if ((x >= 3 && x < 6) && y < 3) {
            subB.push(getIndex(x, y));
            p = 2;
        }
        if ((x >= 6 && x < 9) && y < 3) {
            subC.push(getIndex(x, y));
            p = 3;
        }
        if (x < 3 && (y >= 3 && y < 6)) {
            subD.push(getIndex(x, y));
            p = 4;
        }
        if ((x >= 3 && x < 6) && (y >= 3 && y < 6)) {
            subE.push(getIndex(x, y));
            p = 5;
        }
        if ((x >= 6 && x < 9) && (y >= 3 && y < 6)) {
            subF.push(getIndex(x, y));
            p = 6;
        }
        if (x < 3 && (y >= 6 && y < 9)) {
            subG.push(getIndex(x, y));
            p = 7;
        }
        if ((x >= 3 && x < 6) && (y >= 6 && y < 9)) {
            subH.push(getIndex(x, y));
            p = 8;
        }
        if ((x >= 6 && x < 9) && (y >= 6 && y < 9)) {
            subI.push(getIndex(x, y));
            p = 9;
        }
        var a = { x: x,
            y: y,
            n: n,
            p: p,
            tried: [] };
        all.push(a);
    }
}
function getIndex(x, y) {
    return y * 9 + x;
}
// == test numerical value of the ligne an colonne ==
// if number already exist, return false
// if test is passed return true
function testLigne(x, y) {
    for (var start = 0; start < 9; ++start) {
        if (x == start) {
            continue;
        }
        if (all[getIndex(start, y)].n == all[getIndex(x, y)].n) {
            return false;
        }
    }
    return true;
}
function testColonne(x, y) {
    for (var start = 0; start < 9; ++start) {
        if (y == start) {
            continue;
        }
        if (all[getIndex(x, start)].n == all[getIndex(x, y)].n) {
            return false;
        }
    }
    return true;
}
function testSub(index) {
    var p = all[index].p;
    var result = true;
    switch (p) {
        case 1:
            for (var i = 0; i < 9; ++i) {
                if (getIndex(all[index].x, all[index].y) == subA[i]) {
                    continue;
                }
                if (all[subA[i]].n == all[index].n) {
                    result = false;
                }
            }
            break;
        case 2:
            for (var i = 0; i < 9; ++i) {
                if (getIndex(all[index].x, all[index].y) == subB[i]) {
                    continue;
                }
                if (all[subB[i]].n == all[index].n) {
                    result = false;
                }
            }
            break;
        case 3:
            for (var i = 0; i < 9; ++i) {
                if (getIndex(all[index].x, all[index].y) == subC[i]) {
                    continue;
                }
                if (all[subC[i]].n == all[index].n) {
                    result = false;
                }
            }
            break;
        case 4:
            for (var i = 0; i < 9; ++i) {
                if (getIndex(all[index].x, all[index].y) == subD[i]) {
                    continue;
                }
                if (all[subD[i]].n == all[index].n) {
                    result = false;
                }
            }
            break;
        case 5:
            for (var i = 0; i < 9; ++i) {
                if (getIndex(all[index].x, all[index].y) == subE[i]) {
                    continue;
                }
                if (all[subE[i]].n == all[index].n) {
                    result = false;
                }
            }
            break;
        case 6:
            for (var i = 0; i < 9; ++i) {
                if (getIndex(all[index].x, all[index].y) == subF[i]) {
                    continue;
                }
                if (all[subF[i]].n == all[index].n) {
                    result = false;
                }
            }
            break;
        case 7:
            for (var i = 0; i < 9; ++i) {
                if (getIndex(all[index].x, all[index].y) == subG[i]) {
                    continue;
                }
                if (all[subG[i]].n == all[index].n) {
                    result = false;
                }
            }
            break;
        case 8:
            for (var i = 0; i < 9; ++i) {
                if (getIndex(all[index].x, all[index].y) == subH[i]) {
                    continue;
                }
                if (all[subH[i]].n == all[index].n) {
                    result = false;
                }
            }
            break;
        case 9:
            for (var i = 0; i < 9; ++i) {
                if (getIndex(all[index].x, all[index].y) == subI[i]) {
                    continue;
                }
                if (all[subI[i]].n == all[index].n) {
                    result = false;
                }
            }
            break;
    }
    return result;
}
function testTried(n, index) {
    var l = all[index].tried.length;
    for (var i = 0; i < l; ++i) {
        if (n == all[index].tried[i]) {
            return false;
        }
    }
    return true;
}
function getInt() {
    return Math.floor(Math.random() * 9) + 1;
}
// =======================================================
function getGrid(tablePage, solution) {
    //Empty array grid
    for (var i = 0; i < 81; ++i) {
        all[i].n = 0;
        all[i].tried = [];
    }
    var index = 0;
    do {
        if (all[index].tried.length > 8) {
            all[index].tried = []; // clear tried
            all[index].n = 0;
            --index; // backtrack
            continue; // loop out
        }
        var ix = all[index].x;
        var iy = all[index].y;
        var nRand = getInt();
        var test = testTried(nRand, index);
        if (test) {
            all[index].n = nRand;
            all[index].tried.push(nRand);
        }
        else {
            continue;
        }
        if (testLigne(ix, iy)) {
            if (testColonne(ix, iy)) {
                if (testSub(index)) {
                    ++index;
                }
            }
        }
    } while (index < 81);
    // random select difficulty based
    var randS = [];
    while (randS.length < difficulty) {
        var randIndex = Math.floor(Math.random() * 80);
        if (randS.indexOf(randIndex) == -1) {
            randS.push(randIndex);
        }
    }
    // return all;
    var table;
    var tableSol;
    var i = 0;
    for (var y = 0; y < 9; ++y) {
        if (y == 0) {
            table = "<tr>";
            tableSol = "<tr>";
        }
        if ((y % 3 == 0) && y != 0) {
            table += '<tr class="topB">';
            tableSol += '<tr class="topB">';
        }
        else {
            table += "<tr>";
            tableSol += "<tr>";
        }
        for (var x = 0; x < 9; ++x) {
            if ((x % 3 == 0) && x != 0) {
                if (randS.indexOf(i) != -1) {
                    table += '<td class="leftB">' + all[i].n + '</td>';
                }
                else {
                    table += '<td class="leftB">' + " " + '</td>';
                }
                tableSol += '<td class="leftB">' + all[i].n + '</td>';
            }
            else {
                if (randS.indexOf(i) != -1) {
                    table += '<td>' + all[i].n + '</td>';
                }
                else {
                    table += '<td>' + " " + '</td>';
                }
                tableSol += '<td>' + all[i].n + '</td>';
            }
            ++i;
        }
        table += "</tr>";
        tableSol += "</tr>";
    }
    tablePage.innerHTML += table;
    solution.innerHTML += tableSol;
}
function generateTable() {
    getGrid(table1, sol1);
    getGrid(table2, sol2);
    getGrid(table3, sol3);
    getGrid(table4, sol4);
}
function clearTable() {
    table1.innerHTML = "";
    table2.innerHTML = "";
    table3.innerHTML = "";
    table4.innerHTML = "";
    sol1.innerHTML = "";
    sol2.innerHTML = "";
    sol3.innerHTML = "";
    sol4.innerHTML = "";
}
var table1 = document.getElementById("table1");
var table2 = document.getElementById("table2");
var table3 = document.getElementById("table3");
var table4 = document.getElementById("table4");
var sol1 = document.getElementById("sol1");
var sol2 = document.getElementById("sol2");
var sol3 = document.getElementById("sol3");
var sol4 = document.getElementById("sol4");
generateTable();
var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");
var sol = document.getElementById("allSoluce");
document.getElementById("easy").addEventListener("click", function () {
    if (easy.className !== "select") {
        easy.className = "select";
        medium.className = "no-select";
        hard.className = "no-select";
    }
    difficulty = 36;
    clearTable();
    generateTable();
});
document.getElementById("medium").addEventListener("click", function () {
    if (medium.className !== "select") {
        easy.className = "no-select";
        medium.className = "select";
        hard.className = "no-select";
    }
    difficulty = 32;
    clearTable();
    generateTable();
});
document.getElementById("hard").addEventListener("click", function () {
    if (hard.className !== "select") {
        easy.className = "no-select";
        medium.className = "no-select";
        hard.className = "select";
    }
    difficulty = 28;
    clearTable();
    generateTable();
});
document.getElementById("soluce").addEventListener("click", function () {
    if (sol.className === "hide") {
        sol.className = "flexSoluce";
        document.getElementById("soluce").className = "selectSol";
    }
    else {
        sol.className = "hide";
        document.getElementById("soluce").className = "no-select";
    }
});
