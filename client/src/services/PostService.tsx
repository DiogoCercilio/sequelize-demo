export default class PostService {
    static async getAll(): Promise<any> {
        return await fetch('http://localhost:4000/posts').then(res=> res.json());
    }
}