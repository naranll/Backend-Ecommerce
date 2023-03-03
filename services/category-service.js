import { pool } from "../config/mysql-config.js";

export async function getBrands() {
    const [rows] = await pool.query(`SELECT * FROM category`);
    return rows;
}