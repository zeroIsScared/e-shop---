import { Money } from '../Financial/entities.js';
import { Product } from "./entities.js";
import { ProductRequest } from './schema.js';
export const productRoutes = async (server, options) => {
    server.post('/', {
        schema: {
            body: ProductRequest,
            response: {
                200: ProductRequest,
            }
        }
    }, async (request, reply) => {
        const product = new Product();
        const { name, image, amount, currency } = request.body;
        product.name = name;
        product.image = image;
        product.price = new Money();
        product.price.amount = amount;
        product.price.currency = currency;
        await server.orm.manager.save(product);
        return reply.send({ name, image, amount, currency });
    }),
        server.get('/:search', async (request, reply) => {
            const query = request.params.search;
            const products = await server.orm.getRepository(Product)
                .createQueryBuilder()
                .select()
                .where('name ILIKE :query', { query: `%${query}%` })
                .getMany();
            return reply.send({ products });
        });
};
