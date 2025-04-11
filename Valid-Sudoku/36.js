var isValidSudoku = function(board) {
    const map = new Map();

    // rows

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (map.get(board[i][j]) && board[i][j] !== '.') {
                return false
            } else {
                map.set(board[i][j], 1)
            }
        }
        map.clear();
    }
    // columns
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (map.get(board[j][i]) && board[j][i] !== '.') {
                return false
            } else {
                map.set(board[j][i], 1)
            }
        }
        map.clear();
    }

    // 3x3
    for (let vertJump = 0; vertJump < 3; vertJump++) {
        for (let horizJump = 0; horizJump < 3; horizJump++) {
            map.clear()
            for (let vertI = vertJump * 3; vertI < vertJump * 3 + 3; vertI++) {
                for (let horizI = horizJump * 3; horizI < horizJump * 3 + 3; horizI++) {
                    if (map.get(board[vertI][horizI]) && board[vertI][horizI] !== '.') {
                        return false
                    } else {
                        map.set(board[vertI][horizI], 1)
                    }
                }
                
            }
        }
    }
    return true
};