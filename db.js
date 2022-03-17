async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://admin:Qwe123123qwe@workspace.cd77ovbthozc.sa-east-1.rds.amazonaws.com:3306/embraer_workspace");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

const select = async() => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM ptax');
    // console.log(rows)
    return rows;
}
module.exports = select

// connect()
// select()