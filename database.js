import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("little_lemon")

export async function createTable() {
    return new Promise((resolve, reject) => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "create table if not exists menuitems (id integer primary key not null, uuid text, name text, price text, description text, image text, category text);"
                )
            },
            reject,
            resolve
        )
    })
}

export async function getMenuItems() {
    return new Promise((resolve) => {
        db.transaction((tx) => {
            tx.executeSql("select * from menuitems", [], (_, {rows}) => {
                resolve(rows._array)
            })
        })
    })
}

export async function saveMenuItems(menuitems) {
    db.transaction((tx) => {
        menuitems.forEach((ele) => {
            const query ="INSERT INTO menuitems (id,uuid,name,price,description,image,category) VALUES (?,?,?,?,?,?,?)"
            tx.executeSql(
                query,
                [ele.id, ele.id, ele.name, ele.price, ele.description, ele.image, ele.category],
                (_, { rows }) => {
                    console.log("Status : Success", rows);
                },
                (err) => {
                    console.log("Status : Failed");
                }
            )
        })
    })
}

export async function filterByQueryAndCategories(query, activeCategories) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        const result = [];
        let qStr = "?";
        activeCategories.forEach((ele) => {
          qStr += ", ?";
        });
        tx.executeSql(
          "select * from menuitems where category IN (" + qStr + ")",
          [...activeCategories],
          (_, { rows }) => {
            rows._array.forEach((ele) => {
                if (ele.name.toLowerCase().includes(query.toLowerCase())) {
                  result.push(ele);
                }
              });
            resolve(result);
          }
        );
      });
    });
  }
  