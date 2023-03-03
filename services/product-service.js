import { pool } from "../config/mysql-config.js";

export async function getProducts() {
    const [rows] = await pool.query(`SELECT * FROM product`);
    return rows;
}
export async function createProduct(product) {
    const [rows] = await pool.query(`INSERT INTO product (name, brand_id, category_id, description, sale, price, stock, image) VALUES (${product})`);
    return rows;
}