import pool from '$lib/server/database.js';
import { redirect } from '@sveltejs/kit';


export async function load({ params }) {

    let categoryId = params.id;

    const [rows] = await pool.execute('SELECT * from categories WHERE id= ?', [categoryId]);
    
    if (rows.length === 0) {
        return {
            status: 404,
            error: new Error('Category not found')
        }
    }
    
    return {
        category: rows[0]
    }
}



export const actions = {

    edit: async ({request, params}) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const id = params.id;

        // write to database
        await pool.execute('Update categories SET name = ? WHERE id = ?',
            [name, id]
        );

        redirect(303, '/admin/categories')

    }    

};