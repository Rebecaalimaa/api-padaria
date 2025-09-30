
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Produto
 * 
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model Item_Pedido
 * 
 */
export type Item_Pedido = $Result.DefaultSelection<Prisma.$Item_PedidoPayload>
/**
 * Model Funcionario
 * 
 */
export type Funcionario = $Result.DefaultSelection<Prisma.$FuncionarioPayload>
/**
 * Model MovimentoEstoque
 * 
 */
export type MovimentoEstoque = $Result.DefaultSelection<Prisma.$MovimentoEstoquePayload>
/**
 * Model Fornecedor
 * 
 */
export type Fornecedor = $Result.DefaultSelection<Prisma.$FornecedorPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Tipo: {
  Entrada: 'Entrada',
  Saida: 'Saida'
};

export type Tipo = (typeof Tipo)[keyof typeof Tipo]

}

export type Tipo = $Enums.Tipo

export const Tipo: typeof $Enums.Tipo

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item_Pedido`: Exposes CRUD operations for the **Item_Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Item_Pedidos
    * const item_Pedidos = await prisma.item_Pedido.findMany()
    * ```
    */
  get item_Pedido(): Prisma.Item_PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcionario`: Exposes CRUD operations for the **Funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionario.findMany()
    * ```
    */
  get funcionario(): Prisma.FuncionarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimentoEstoque`: Exposes CRUD operations for the **MovimentoEstoque** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovimentoEstoques
    * const movimentoEstoques = await prisma.movimentoEstoque.findMany()
    * ```
    */
  get movimentoEstoque(): Prisma.MovimentoEstoqueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fornecedor`: Exposes CRUD operations for the **Fornecedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fornecedors
    * const fornecedors = await prisma.fornecedor.findMany()
    * ```
    */
  get fornecedor(): Prisma.FornecedorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cliente: 'Cliente',
    Produto: 'Produto',
    Pedido: 'Pedido',
    Item_Pedido: 'Item_Pedido',
    Funcionario: 'Funcionario',
    MovimentoEstoque: 'MovimentoEstoque',
    Fornecedor: 'Fornecedor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cliente" | "produto" | "pedido" | "item_Pedido" | "funcionario" | "movimentoEstoque" | "fornecedor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      Item_Pedido: {
        payload: Prisma.$Item_PedidoPayload<ExtArgs>
        fields: Prisma.Item_PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Item_PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Item_PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Item_PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Item_PedidoPayload>
          }
          findFirst: {
            args: Prisma.Item_PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Item_PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Item_PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Item_PedidoPayload>
          }
          findMany: {
            args: Prisma.Item_PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Item_PedidoPayload>[]
          }
          create: {
            args: Prisma.Item_PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Item_PedidoPayload>
          }
          createMany: {
            args: Prisma.Item_PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Item_PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Item_PedidoPayload>
          }
          update: {
            args: Prisma.Item_PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Item_PedidoPayload>
          }
          deleteMany: {
            args: Prisma.Item_PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Item_PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Item_PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Item_PedidoPayload>
          }
          aggregate: {
            args: Prisma.Item_PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem_Pedido>
          }
          groupBy: {
            args: Prisma.Item_PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Item_PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Item_PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<Item_PedidoCountAggregateOutputType> | number
          }
        }
      }
      Funcionario: {
        payload: Prisma.$FuncionarioPayload<ExtArgs>
        fields: Prisma.FuncionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuncionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuncionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findFirst: {
            args: Prisma.FuncionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuncionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findMany: {
            args: Prisma.FuncionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          create: {
            args: Prisma.FuncionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          createMany: {
            args: Prisma.FuncionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FuncionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          update: {
            args: Prisma.FuncionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          deleteMany: {
            args: Prisma.FuncionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuncionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FuncionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          aggregate: {
            args: Prisma.FuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionario>
          }
          groupBy: {
            args: Prisma.FuncionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuncionarioCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioCountAggregateOutputType> | number
          }
        }
      }
      MovimentoEstoque: {
        payload: Prisma.$MovimentoEstoquePayload<ExtArgs>
        fields: Prisma.MovimentoEstoqueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovimentoEstoqueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentoEstoquePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovimentoEstoqueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentoEstoquePayload>
          }
          findFirst: {
            args: Prisma.MovimentoEstoqueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentoEstoquePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovimentoEstoqueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentoEstoquePayload>
          }
          findMany: {
            args: Prisma.MovimentoEstoqueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentoEstoquePayload>[]
          }
          create: {
            args: Prisma.MovimentoEstoqueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentoEstoquePayload>
          }
          createMany: {
            args: Prisma.MovimentoEstoqueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MovimentoEstoqueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentoEstoquePayload>
          }
          update: {
            args: Prisma.MovimentoEstoqueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentoEstoquePayload>
          }
          deleteMany: {
            args: Prisma.MovimentoEstoqueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovimentoEstoqueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovimentoEstoqueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentoEstoquePayload>
          }
          aggregate: {
            args: Prisma.MovimentoEstoqueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimentoEstoque>
          }
          groupBy: {
            args: Prisma.MovimentoEstoqueGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimentoEstoqueGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovimentoEstoqueCountArgs<ExtArgs>
            result: $Utils.Optional<MovimentoEstoqueCountAggregateOutputType> | number
          }
        }
      }
      Fornecedor: {
        payload: Prisma.$FornecedorPayload<ExtArgs>
        fields: Prisma.FornecedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FornecedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FornecedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          findFirst: {
            args: Prisma.FornecedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FornecedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          findMany: {
            args: Prisma.FornecedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>[]
          }
          create: {
            args: Prisma.FornecedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          createMany: {
            args: Prisma.FornecedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FornecedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          update: {
            args: Prisma.FornecedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          deleteMany: {
            args: Prisma.FornecedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FornecedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FornecedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          aggregate: {
            args: Prisma.FornecedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFornecedor>
          }
          groupBy: {
            args: Prisma.FornecedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<FornecedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.FornecedorCountArgs<ExtArgs>
            result: $Utils.Optional<FornecedorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cliente?: ClienteOmit
    produto?: ProdutoOmit
    pedido?: PedidoOmit
    item_Pedido?: Item_PedidoOmit
    funcionario?: FuncionarioOmit
    movimentoEstoque?: MovimentoEstoqueOmit
    fornecedor?: FornecedorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    pedidos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | ClienteCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    itens: number
    movimentos: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | ProdutoCountOutputTypeCountItensArgs
    movimentos?: boolean | ProdutoCountOutputTypeCountMovimentosArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Item_PedidoWhereInput
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountMovimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentoEstoqueWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    itens: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | PedidoCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Item_PedidoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    cliente_id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    cliente_id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    cliente_id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    telefone: string | null
    endereco: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    cliente_id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    telefone: string | null
    endereco: string | null
  }

  export type ClienteCountAggregateOutputType = {
    cliente_id: number
    nome: number
    email: number
    senha: number
    telefone: number
    endereco: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    cliente_id?: true
  }

  export type ClienteSumAggregateInputType = {
    cliente_id?: true
  }

  export type ClienteMinAggregateInputType = {
    cliente_id?: true
    nome?: true
    email?: true
    senha?: true
    telefone?: true
    endereco?: true
  }

  export type ClienteMaxAggregateInputType = {
    cliente_id?: true
    nome?: true
    email?: true
    senha?: true
    telefone?: true
    endereco?: true
  }

  export type ClienteCountAggregateInputType = {
    cliente_id?: true
    nome?: true
    email?: true
    senha?: true
    telefone?: true
    endereco?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    cliente_id: number
    nome: string
    email: string
    senha: string
    telefone: string
    endereco: string | null
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cliente_id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    endereco?: boolean
    pedidos?: boolean | Cliente$pedidosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>



  export type ClienteSelectScalar = {
    cliente_id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    endereco?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cliente_id" | "nome" | "email" | "senha" | "telefone" | "endereco", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | Cliente$pedidosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cliente_id: number
      nome: string
      email: string
      senha: string
      telefone: string
      endereco: string | null
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `cliente_id`
     * const clienteWithCliente_idOnly = await prisma.cliente.findMany({ select: { cliente_id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends Cliente$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly cliente_id: FieldRef<"Cliente", 'Int'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly senha: FieldRef<"Cliente", 'String'>
    readonly telefone: FieldRef<"Cliente", 'String'>
    readonly endereco: FieldRef<"Cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.pedidos
   */
  export type Cliente$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    produto_id: number | null
    preco: number | null
    qtd_estoque: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    produto_id: number | null
    preco: number | null
    qtd_estoque: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    produto_id: number | null
    nome: string | null
    preco: number | null
    descricao: string | null
    qtd_estoque: number | null
  }

  export type ProdutoMaxAggregateOutputType = {
    produto_id: number | null
    nome: string | null
    preco: number | null
    descricao: string | null
    qtd_estoque: number | null
  }

  export type ProdutoCountAggregateOutputType = {
    produto_id: number
    nome: number
    preco: number
    descricao: number
    qtd_estoque: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    produto_id?: true
    preco?: true
    qtd_estoque?: true
  }

  export type ProdutoSumAggregateInputType = {
    produto_id?: true
    preco?: true
    qtd_estoque?: true
  }

  export type ProdutoMinAggregateInputType = {
    produto_id?: true
    nome?: true
    preco?: true
    descricao?: true
    qtd_estoque?: true
  }

  export type ProdutoMaxAggregateInputType = {
    produto_id?: true
    nome?: true
    preco?: true
    descricao?: true
    qtd_estoque?: true
  }

  export type ProdutoCountAggregateInputType = {
    produto_id?: true
    nome?: true
    preco?: true
    descricao?: true
    qtd_estoque?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    produto_id: number
    nome: string
    preco: number
    descricao: string
    qtd_estoque: number
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    produto_id?: boolean
    nome?: boolean
    preco?: boolean
    descricao?: boolean
    qtd_estoque?: boolean
    itens?: boolean | Produto$itensArgs<ExtArgs>
    movimentos?: boolean | Produto$movimentosArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>



  export type ProdutoSelectScalar = {
    produto_id?: boolean
    nome?: boolean
    preco?: boolean
    descricao?: boolean
    qtd_estoque?: boolean
  }

  export type ProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"produto_id" | "nome" | "preco" | "descricao" | "qtd_estoque", ExtArgs["result"]["produto"]>
  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | Produto$itensArgs<ExtArgs>
    movimentos?: boolean | Produto$movimentosArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      itens: Prisma.$Item_PedidoPayload<ExtArgs>[]
      movimentos: Prisma.$MovimentoEstoquePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      produto_id: number
      nome: string
      preco: number
      descricao: string
      qtd_estoque: number
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `produto_id`
     * const produtoWithProduto_idOnly = await prisma.produto.findMany({ select: { produto_id: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itens<T extends Produto$itensArgs<ExtArgs> = {}>(args?: Subset<T, Produto$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Item_PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimentos<T extends Produto$movimentosArgs<ExtArgs> = {}>(args?: Subset<T, Produto$movimentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentoEstoquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Produto model
   */
  interface ProdutoFieldRefs {
    readonly produto_id: FieldRef<"Produto", 'Int'>
    readonly nome: FieldRef<"Produto", 'String'>
    readonly preco: FieldRef<"Produto", 'Float'>
    readonly descricao: FieldRef<"Produto", 'String'>
    readonly qtd_estoque: FieldRef<"Produto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produto.itens
   */
  export type Produto$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_Pedido
     */
    select?: Item_PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_Pedido
     */
    omit?: Item_PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_PedidoInclude<ExtArgs> | null
    where?: Item_PedidoWhereInput
    orderBy?: Item_PedidoOrderByWithRelationInput | Item_PedidoOrderByWithRelationInput[]
    cursor?: Item_PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Item_PedidoScalarFieldEnum | Item_PedidoScalarFieldEnum[]
  }

  /**
   * Produto.movimentos
   */
  export type Produto$movimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentoEstoque
     */
    select?: MovimentoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentoEstoque
     */
    omit?: MovimentoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentoEstoqueInclude<ExtArgs> | null
    where?: MovimentoEstoqueWhereInput
    orderBy?: MovimentoEstoqueOrderByWithRelationInput | MovimentoEstoqueOrderByWithRelationInput[]
    cursor?: MovimentoEstoqueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentoEstoqueScalarFieldEnum | MovimentoEstoqueScalarFieldEnum[]
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    pedido_id: number | null
    cliente_id: number | null
    sub_total: Decimal | null
  }

  export type PedidoSumAggregateOutputType = {
    pedido_id: number | null
    cliente_id: number | null
    sub_total: Decimal | null
  }

  export type PedidoMinAggregateOutputType = {
    pedido_id: number | null
    cliente_id: number | null
    data: Date | null
    sub_total: Decimal | null
  }

  export type PedidoMaxAggregateOutputType = {
    pedido_id: number | null
    cliente_id: number | null
    data: Date | null
    sub_total: Decimal | null
  }

  export type PedidoCountAggregateOutputType = {
    pedido_id: number
    cliente_id: number
    data: number
    sub_total: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    pedido_id?: true
    cliente_id?: true
    sub_total?: true
  }

  export type PedidoSumAggregateInputType = {
    pedido_id?: true
    cliente_id?: true
    sub_total?: true
  }

  export type PedidoMinAggregateInputType = {
    pedido_id?: true
    cliente_id?: true
    data?: true
    sub_total?: true
  }

  export type PedidoMaxAggregateInputType = {
    pedido_id?: true
    cliente_id?: true
    data?: true
    sub_total?: true
  }

  export type PedidoCountAggregateInputType = {
    pedido_id?: true
    cliente_id?: true
    data?: true
    sub_total?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    pedido_id: number
    cliente_id: number
    data: Date
    sub_total: Decimal | null
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pedido_id?: boolean
    cliente_id?: boolean
    data?: boolean
    sub_total?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    itens?: boolean | Pedido$itensArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>



  export type PedidoSelectScalar = {
    pedido_id?: boolean
    cliente_id?: boolean
    data?: boolean
    sub_total?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pedido_id" | "cliente_id" | "data" | "sub_total", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    itens?: boolean | Pedido$itensArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      itens: Prisma.$Item_PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pedido_id: number
      cliente_id: number
      data: Date
      sub_total: Prisma.Decimal | null
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `pedido_id`
     * const pedidoWithPedido_idOnly = await prisma.pedido.findMany({ select: { pedido_id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends Pedido$itensArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Item_PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly pedido_id: FieldRef<"Pedido", 'Int'>
    readonly cliente_id: FieldRef<"Pedido", 'Int'>
    readonly data: FieldRef<"Pedido", 'DateTime'>
    readonly sub_total: FieldRef<"Pedido", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.itens
   */
  export type Pedido$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_Pedido
     */
    select?: Item_PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_Pedido
     */
    omit?: Item_PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_PedidoInclude<ExtArgs> | null
    where?: Item_PedidoWhereInput
    orderBy?: Item_PedidoOrderByWithRelationInput | Item_PedidoOrderByWithRelationInput[]
    cursor?: Item_PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Item_PedidoScalarFieldEnum | Item_PedidoScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model Item_Pedido
   */

  export type AggregateItem_Pedido = {
    _count: Item_PedidoCountAggregateOutputType | null
    _avg: Item_PedidoAvgAggregateOutputType | null
    _sum: Item_PedidoSumAggregateOutputType | null
    _min: Item_PedidoMinAggregateOutputType | null
    _max: Item_PedidoMaxAggregateOutputType | null
  }

  export type Item_PedidoAvgAggregateOutputType = {
    item_id: number | null
    pedido_id: number | null
    produto_id: number | null
    quantidade: number | null
    preco_unitario: number | null
    valor_total: number | null
  }

  export type Item_PedidoSumAggregateOutputType = {
    item_id: number | null
    pedido_id: number | null
    produto_id: number | null
    quantidade: number | null
    preco_unitario: number | null
    valor_total: number | null
  }

  export type Item_PedidoMinAggregateOutputType = {
    item_id: number | null
    pedido_id: number | null
    produto_id: number | null
    data_venda: Date | null
    quantidade: number | null
    preco_unitario: number | null
    forma_pagamento: string | null
    valor_total: number | null
  }

  export type Item_PedidoMaxAggregateOutputType = {
    item_id: number | null
    pedido_id: number | null
    produto_id: number | null
    data_venda: Date | null
    quantidade: number | null
    preco_unitario: number | null
    forma_pagamento: string | null
    valor_total: number | null
  }

  export type Item_PedidoCountAggregateOutputType = {
    item_id: number
    pedido_id: number
    produto_id: number
    data_venda: number
    quantidade: number
    preco_unitario: number
    forma_pagamento: number
    valor_total: number
    _all: number
  }


  export type Item_PedidoAvgAggregateInputType = {
    item_id?: true
    pedido_id?: true
    produto_id?: true
    quantidade?: true
    preco_unitario?: true
    valor_total?: true
  }

  export type Item_PedidoSumAggregateInputType = {
    item_id?: true
    pedido_id?: true
    produto_id?: true
    quantidade?: true
    preco_unitario?: true
    valor_total?: true
  }

  export type Item_PedidoMinAggregateInputType = {
    item_id?: true
    pedido_id?: true
    produto_id?: true
    data_venda?: true
    quantidade?: true
    preco_unitario?: true
    forma_pagamento?: true
    valor_total?: true
  }

  export type Item_PedidoMaxAggregateInputType = {
    item_id?: true
    pedido_id?: true
    produto_id?: true
    data_venda?: true
    quantidade?: true
    preco_unitario?: true
    forma_pagamento?: true
    valor_total?: true
  }

  export type Item_PedidoCountAggregateInputType = {
    item_id?: true
    pedido_id?: true
    produto_id?: true
    data_venda?: true
    quantidade?: true
    preco_unitario?: true
    forma_pagamento?: true
    valor_total?: true
    _all?: true
  }

  export type Item_PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item_Pedido to aggregate.
     */
    where?: Item_PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Item_Pedidos to fetch.
     */
    orderBy?: Item_PedidoOrderByWithRelationInput | Item_PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Item_PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Item_Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Item_Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Item_Pedidos
    **/
    _count?: true | Item_PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Item_PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Item_PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Item_PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Item_PedidoMaxAggregateInputType
  }

  export type GetItem_PedidoAggregateType<T extends Item_PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateItem_Pedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem_Pedido[P]>
      : GetScalarType<T[P], AggregateItem_Pedido[P]>
  }




  export type Item_PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Item_PedidoWhereInput
    orderBy?: Item_PedidoOrderByWithAggregationInput | Item_PedidoOrderByWithAggregationInput[]
    by: Item_PedidoScalarFieldEnum[] | Item_PedidoScalarFieldEnum
    having?: Item_PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Item_PedidoCountAggregateInputType | true
    _avg?: Item_PedidoAvgAggregateInputType
    _sum?: Item_PedidoSumAggregateInputType
    _min?: Item_PedidoMinAggregateInputType
    _max?: Item_PedidoMaxAggregateInputType
  }

  export type Item_PedidoGroupByOutputType = {
    item_id: number
    pedido_id: number
    produto_id: number
    data_venda: Date
    quantidade: number
    preco_unitario: number
    forma_pagamento: string | null
    valor_total: number | null
    _count: Item_PedidoCountAggregateOutputType | null
    _avg: Item_PedidoAvgAggregateOutputType | null
    _sum: Item_PedidoSumAggregateOutputType | null
    _min: Item_PedidoMinAggregateOutputType | null
    _max: Item_PedidoMaxAggregateOutputType | null
  }

  type GetItem_PedidoGroupByPayload<T extends Item_PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Item_PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Item_PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Item_PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], Item_PedidoGroupByOutputType[P]>
        }
      >
    >


  export type Item_PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    pedido_id?: boolean
    produto_id?: boolean
    data_venda?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    forma_pagamento?: boolean
    valor_total?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item_Pedido"]>



  export type Item_PedidoSelectScalar = {
    item_id?: boolean
    pedido_id?: boolean
    produto_id?: boolean
    data_venda?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    forma_pagamento?: boolean
    valor_total?: boolean
  }

  export type Item_PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"item_id" | "pedido_id" | "produto_id" | "data_venda" | "quantidade" | "preco_unitario" | "forma_pagamento" | "valor_total", ExtArgs["result"]["item_Pedido"]>
  export type Item_PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }

  export type $Item_PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item_Pedido"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      produto: Prisma.$ProdutoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      item_id: number
      pedido_id: number
      produto_id: number
      data_venda: Date
      quantidade: number
      preco_unitario: number
      forma_pagamento: string | null
      valor_total: number | null
    }, ExtArgs["result"]["item_Pedido"]>
    composites: {}
  }

  type Item_PedidoGetPayload<S extends boolean | null | undefined | Item_PedidoDefaultArgs> = $Result.GetResult<Prisma.$Item_PedidoPayload, S>

  type Item_PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Item_PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Item_PedidoCountAggregateInputType | true
    }

  export interface Item_PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item_Pedido'], meta: { name: 'Item_Pedido' } }
    /**
     * Find zero or one Item_Pedido that matches the filter.
     * @param {Item_PedidoFindUniqueArgs} args - Arguments to find a Item_Pedido
     * @example
     * // Get one Item_Pedido
     * const item_Pedido = await prisma.item_Pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Item_PedidoFindUniqueArgs>(args: SelectSubset<T, Item_PedidoFindUniqueArgs<ExtArgs>>): Prisma__Item_PedidoClient<$Result.GetResult<Prisma.$Item_PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item_Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Item_PedidoFindUniqueOrThrowArgs} args - Arguments to find a Item_Pedido
     * @example
     * // Get one Item_Pedido
     * const item_Pedido = await prisma.item_Pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Item_PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, Item_PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Item_PedidoClient<$Result.GetResult<Prisma.$Item_PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item_Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_PedidoFindFirstArgs} args - Arguments to find a Item_Pedido
     * @example
     * // Get one Item_Pedido
     * const item_Pedido = await prisma.item_Pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Item_PedidoFindFirstArgs>(args?: SelectSubset<T, Item_PedidoFindFirstArgs<ExtArgs>>): Prisma__Item_PedidoClient<$Result.GetResult<Prisma.$Item_PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item_Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_PedidoFindFirstOrThrowArgs} args - Arguments to find a Item_Pedido
     * @example
     * // Get one Item_Pedido
     * const item_Pedido = await prisma.item_Pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Item_PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, Item_PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__Item_PedidoClient<$Result.GetResult<Prisma.$Item_PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Item_Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Item_Pedidos
     * const item_Pedidos = await prisma.item_Pedido.findMany()
     * 
     * // Get first 10 Item_Pedidos
     * const item_Pedidos = await prisma.item_Pedido.findMany({ take: 10 })
     * 
     * // Only select the `item_id`
     * const item_PedidoWithItem_idOnly = await prisma.item_Pedido.findMany({ select: { item_id: true } })
     * 
     */
    findMany<T extends Item_PedidoFindManyArgs>(args?: SelectSubset<T, Item_PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Item_PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item_Pedido.
     * @param {Item_PedidoCreateArgs} args - Arguments to create a Item_Pedido.
     * @example
     * // Create one Item_Pedido
     * const Item_Pedido = await prisma.item_Pedido.create({
     *   data: {
     *     // ... data to create a Item_Pedido
     *   }
     * })
     * 
     */
    create<T extends Item_PedidoCreateArgs>(args: SelectSubset<T, Item_PedidoCreateArgs<ExtArgs>>): Prisma__Item_PedidoClient<$Result.GetResult<Prisma.$Item_PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Item_Pedidos.
     * @param {Item_PedidoCreateManyArgs} args - Arguments to create many Item_Pedidos.
     * @example
     * // Create many Item_Pedidos
     * const item_Pedido = await prisma.item_Pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Item_PedidoCreateManyArgs>(args?: SelectSubset<T, Item_PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item_Pedido.
     * @param {Item_PedidoDeleteArgs} args - Arguments to delete one Item_Pedido.
     * @example
     * // Delete one Item_Pedido
     * const Item_Pedido = await prisma.item_Pedido.delete({
     *   where: {
     *     // ... filter to delete one Item_Pedido
     *   }
     * })
     * 
     */
    delete<T extends Item_PedidoDeleteArgs>(args: SelectSubset<T, Item_PedidoDeleteArgs<ExtArgs>>): Prisma__Item_PedidoClient<$Result.GetResult<Prisma.$Item_PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item_Pedido.
     * @param {Item_PedidoUpdateArgs} args - Arguments to update one Item_Pedido.
     * @example
     * // Update one Item_Pedido
     * const item_Pedido = await prisma.item_Pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Item_PedidoUpdateArgs>(args: SelectSubset<T, Item_PedidoUpdateArgs<ExtArgs>>): Prisma__Item_PedidoClient<$Result.GetResult<Prisma.$Item_PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Item_Pedidos.
     * @param {Item_PedidoDeleteManyArgs} args - Arguments to filter Item_Pedidos to delete.
     * @example
     * // Delete a few Item_Pedidos
     * const { count } = await prisma.item_Pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Item_PedidoDeleteManyArgs>(args?: SelectSubset<T, Item_PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Item_Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Item_Pedidos
     * const item_Pedido = await prisma.item_Pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Item_PedidoUpdateManyArgs>(args: SelectSubset<T, Item_PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item_Pedido.
     * @param {Item_PedidoUpsertArgs} args - Arguments to update or create a Item_Pedido.
     * @example
     * // Update or create a Item_Pedido
     * const item_Pedido = await prisma.item_Pedido.upsert({
     *   create: {
     *     // ... data to create a Item_Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item_Pedido we want to update
     *   }
     * })
     */
    upsert<T extends Item_PedidoUpsertArgs>(args: SelectSubset<T, Item_PedidoUpsertArgs<ExtArgs>>): Prisma__Item_PedidoClient<$Result.GetResult<Prisma.$Item_PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Item_Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_PedidoCountArgs} args - Arguments to filter Item_Pedidos to count.
     * @example
     * // Count the number of Item_Pedidos
     * const count = await prisma.item_Pedido.count({
     *   where: {
     *     // ... the filter for the Item_Pedidos we want to count
     *   }
     * })
    **/
    count<T extends Item_PedidoCountArgs>(
      args?: Subset<T, Item_PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Item_PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item_Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Item_PedidoAggregateArgs>(args: Subset<T, Item_PedidoAggregateArgs>): Prisma.PrismaPromise<GetItem_PedidoAggregateType<T>>

    /**
     * Group by Item_Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Item_PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Item_PedidoGroupByArgs['orderBy'] }
        : { orderBy?: Item_PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Item_PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItem_PedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item_Pedido model
   */
  readonly fields: Item_PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item_Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Item_PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item_Pedido model
   */
  interface Item_PedidoFieldRefs {
    readonly item_id: FieldRef<"Item_Pedido", 'Int'>
    readonly pedido_id: FieldRef<"Item_Pedido", 'Int'>
    readonly produto_id: FieldRef<"Item_Pedido", 'Int'>
    readonly data_venda: FieldRef<"Item_Pedido", 'DateTime'>
    readonly quantidade: FieldRef<"Item_Pedido", 'Int'>
    readonly preco_unitario: FieldRef<"Item_Pedido", 'Float'>
    readonly forma_pagamento: FieldRef<"Item_Pedido", 'String'>
    readonly valor_total: FieldRef<"Item_Pedido", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Item_Pedido findUnique
   */
  export type Item_PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_Pedido
     */
    select?: Item_PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_Pedido
     */
    omit?: Item_PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Item_Pedido to fetch.
     */
    where: Item_PedidoWhereUniqueInput
  }

  /**
   * Item_Pedido findUniqueOrThrow
   */
  export type Item_PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_Pedido
     */
    select?: Item_PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_Pedido
     */
    omit?: Item_PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Item_Pedido to fetch.
     */
    where: Item_PedidoWhereUniqueInput
  }

  /**
   * Item_Pedido findFirst
   */
  export type Item_PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_Pedido
     */
    select?: Item_PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_Pedido
     */
    omit?: Item_PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Item_Pedido to fetch.
     */
    where?: Item_PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Item_Pedidos to fetch.
     */
    orderBy?: Item_PedidoOrderByWithRelationInput | Item_PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Item_Pedidos.
     */
    cursor?: Item_PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Item_Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Item_Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Item_Pedidos.
     */
    distinct?: Item_PedidoScalarFieldEnum | Item_PedidoScalarFieldEnum[]
  }

  /**
   * Item_Pedido findFirstOrThrow
   */
  export type Item_PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_Pedido
     */
    select?: Item_PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_Pedido
     */
    omit?: Item_PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Item_Pedido to fetch.
     */
    where?: Item_PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Item_Pedidos to fetch.
     */
    orderBy?: Item_PedidoOrderByWithRelationInput | Item_PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Item_Pedidos.
     */
    cursor?: Item_PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Item_Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Item_Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Item_Pedidos.
     */
    distinct?: Item_PedidoScalarFieldEnum | Item_PedidoScalarFieldEnum[]
  }

  /**
   * Item_Pedido findMany
   */
  export type Item_PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_Pedido
     */
    select?: Item_PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_Pedido
     */
    omit?: Item_PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Item_Pedidos to fetch.
     */
    where?: Item_PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Item_Pedidos to fetch.
     */
    orderBy?: Item_PedidoOrderByWithRelationInput | Item_PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Item_Pedidos.
     */
    cursor?: Item_PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Item_Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Item_Pedidos.
     */
    skip?: number
    distinct?: Item_PedidoScalarFieldEnum | Item_PedidoScalarFieldEnum[]
  }

  /**
   * Item_Pedido create
   */
  export type Item_PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_Pedido
     */
    select?: Item_PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_Pedido
     */
    omit?: Item_PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Item_Pedido.
     */
    data: XOR<Item_PedidoCreateInput, Item_PedidoUncheckedCreateInput>
  }

  /**
   * Item_Pedido createMany
   */
  export type Item_PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Item_Pedidos.
     */
    data: Item_PedidoCreateManyInput | Item_PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item_Pedido update
   */
  export type Item_PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_Pedido
     */
    select?: Item_PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_Pedido
     */
    omit?: Item_PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Item_Pedido.
     */
    data: XOR<Item_PedidoUpdateInput, Item_PedidoUncheckedUpdateInput>
    /**
     * Choose, which Item_Pedido to update.
     */
    where: Item_PedidoWhereUniqueInput
  }

  /**
   * Item_Pedido updateMany
   */
  export type Item_PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Item_Pedidos.
     */
    data: XOR<Item_PedidoUpdateManyMutationInput, Item_PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Item_Pedidos to update
     */
    where?: Item_PedidoWhereInput
    /**
     * Limit how many Item_Pedidos to update.
     */
    limit?: number
  }

  /**
   * Item_Pedido upsert
   */
  export type Item_PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_Pedido
     */
    select?: Item_PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_Pedido
     */
    omit?: Item_PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Item_Pedido to update in case it exists.
     */
    where: Item_PedidoWhereUniqueInput
    /**
     * In case the Item_Pedido found by the `where` argument doesn't exist, create a new Item_Pedido with this data.
     */
    create: XOR<Item_PedidoCreateInput, Item_PedidoUncheckedCreateInput>
    /**
     * In case the Item_Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Item_PedidoUpdateInput, Item_PedidoUncheckedUpdateInput>
  }

  /**
   * Item_Pedido delete
   */
  export type Item_PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_Pedido
     */
    select?: Item_PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_Pedido
     */
    omit?: Item_PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_PedidoInclude<ExtArgs> | null
    /**
     * Filter which Item_Pedido to delete.
     */
    where: Item_PedidoWhereUniqueInput
  }

  /**
   * Item_Pedido deleteMany
   */
  export type Item_PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item_Pedidos to delete
     */
    where?: Item_PedidoWhereInput
    /**
     * Limit how many Item_Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Item_Pedido without action
   */
  export type Item_PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_Pedido
     */
    select?: Item_PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_Pedido
     */
    omit?: Item_PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_PedidoInclude<ExtArgs> | null
  }


  /**
   * Model Funcionario
   */

  export type AggregateFuncionario = {
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  export type FuncionarioAvgAggregateOutputType = {
    funcionario_id: number | null
  }

  export type FuncionarioSumAggregateOutputType = {
    funcionario_id: number | null
  }

  export type FuncionarioMinAggregateOutputType = {
    funcionario_id: number | null
    nome: string | null
    cargo: string | null
    telefone: string | null
  }

  export type FuncionarioMaxAggregateOutputType = {
    funcionario_id: number | null
    nome: string | null
    cargo: string | null
    telefone: string | null
  }

  export type FuncionarioCountAggregateOutputType = {
    funcionario_id: number
    nome: number
    cargo: number
    telefone: number
    _all: number
  }


  export type FuncionarioAvgAggregateInputType = {
    funcionario_id?: true
  }

  export type FuncionarioSumAggregateInputType = {
    funcionario_id?: true
  }

  export type FuncionarioMinAggregateInputType = {
    funcionario_id?: true
    nome?: true
    cargo?: true
    telefone?: true
  }

  export type FuncionarioMaxAggregateInputType = {
    funcionario_id?: true
    nome?: true
    cargo?: true
    telefone?: true
  }

  export type FuncionarioCountAggregateInputType = {
    funcionario_id?: true
    nome?: true
    cargo?: true
    telefone?: true
    _all?: true
  }

  export type FuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionario to aggregate.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcionarios
    **/
    _count?: true | FuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuncionarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuncionarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionarioMaxAggregateInputType
  }

  export type GetFuncionarioAggregateType<T extends FuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionario[P]>
      : GetScalarType<T[P], AggregateFuncionario[P]>
  }




  export type FuncionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithAggregationInput | FuncionarioOrderByWithAggregationInput[]
    by: FuncionarioScalarFieldEnum[] | FuncionarioScalarFieldEnum
    having?: FuncionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionarioCountAggregateInputType | true
    _avg?: FuncionarioAvgAggregateInputType
    _sum?: FuncionarioSumAggregateInputType
    _min?: FuncionarioMinAggregateInputType
    _max?: FuncionarioMaxAggregateInputType
  }

  export type FuncionarioGroupByOutputType = {
    funcionario_id: number
    nome: string
    cargo: string
    telefone: string
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  type GetFuncionarioGroupByPayload<T extends FuncionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type FuncionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    funcionario_id?: boolean
    nome?: boolean
    cargo?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["funcionario"]>



  export type FuncionarioSelectScalar = {
    funcionario_id?: boolean
    nome?: boolean
    cargo?: boolean
    telefone?: boolean
  }

  export type FuncionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"funcionario_id" | "nome" | "cargo" | "telefone", ExtArgs["result"]["funcionario"]>

  export type $FuncionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Funcionario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      funcionario_id: number
      nome: string
      cargo: string
      telefone: string
    }, ExtArgs["result"]["funcionario"]>
    composites: {}
  }

  type FuncionarioGetPayload<S extends boolean | null | undefined | FuncionarioDefaultArgs> = $Result.GetResult<Prisma.$FuncionarioPayload, S>

  type FuncionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuncionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionarioCountAggregateInputType | true
    }

  export interface FuncionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcionario'], meta: { name: 'Funcionario' } }
    /**
     * Find zero or one Funcionario that matches the filter.
     * @param {FuncionarioFindUniqueArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuncionarioFindUniqueArgs>(args: SelectSubset<T, FuncionarioFindUniqueArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuncionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuncionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, FuncionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuncionarioFindFirstArgs>(args?: SelectSubset<T, FuncionarioFindFirstArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuncionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, FuncionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionario.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionario.findMany({ take: 10 })
     * 
     * // Only select the `funcionario_id`
     * const funcionarioWithFuncionario_idOnly = await prisma.funcionario.findMany({ select: { funcionario_id: true } })
     * 
     */
    findMany<T extends FuncionarioFindManyArgs>(args?: SelectSubset<T, FuncionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionario.
     * @param {FuncionarioCreateArgs} args - Arguments to create a Funcionario.
     * @example
     * // Create one Funcionario
     * const Funcionario = await prisma.funcionario.create({
     *   data: {
     *     // ... data to create a Funcionario
     *   }
     * })
     * 
     */
    create<T extends FuncionarioCreateArgs>(args: SelectSubset<T, FuncionarioCreateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {FuncionarioCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuncionarioCreateManyArgs>(args?: SelectSubset<T, FuncionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Funcionario.
     * @param {FuncionarioDeleteArgs} args - Arguments to delete one Funcionario.
     * @example
     * // Delete one Funcionario
     * const Funcionario = await prisma.funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcionario
     *   }
     * })
     * 
     */
    delete<T extends FuncionarioDeleteArgs>(args: SelectSubset<T, FuncionarioDeleteArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionario.
     * @param {FuncionarioUpdateArgs} args - Arguments to update one Funcionario.
     * @example
     * // Update one Funcionario
     * const funcionario = await prisma.funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuncionarioUpdateArgs>(args: SelectSubset<T, FuncionarioUpdateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {FuncionarioDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuncionarioDeleteManyArgs>(args?: SelectSubset<T, FuncionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuncionarioUpdateManyArgs>(args: SelectSubset<T, FuncionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Funcionario.
     * @param {FuncionarioUpsertArgs} args - Arguments to update or create a Funcionario.
     * @example
     * // Update or create a Funcionario
     * const funcionario = await prisma.funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionario we want to update
     *   }
     * })
     */
    upsert<T extends FuncionarioUpsertArgs>(args: SelectSubset<T, FuncionarioUpsertArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionario.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends FuncionarioCountArgs>(
      args?: Subset<T, FuncionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FuncionarioAggregateArgs>(args: Subset<T, FuncionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncionarioAggregateType<T>>

    /**
     * Group by Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FuncionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuncionarioGroupByArgs['orderBy'] }
        : { orderBy?: FuncionarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FuncionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcionario model
   */
  readonly fields: FuncionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuncionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Funcionario model
   */
  interface FuncionarioFieldRefs {
    readonly funcionario_id: FieldRef<"Funcionario", 'Int'>
    readonly nome: FieldRef<"Funcionario", 'String'>
    readonly cargo: FieldRef<"Funcionario", 'String'>
    readonly telefone: FieldRef<"Funcionario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Funcionario findUnique
   */
  export type FuncionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findUniqueOrThrow
   */
  export type FuncionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findFirst
   */
  export type FuncionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findFirstOrThrow
   */
  export type FuncionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findMany
   */
  export type FuncionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario create
   */
  export type FuncionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Funcionario.
     */
    data: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
  }

  /**
   * Funcionario createMany
   */
  export type FuncionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionario update
   */
  export type FuncionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Funcionario.
     */
    data: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
    /**
     * Choose, which Funcionario to update.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario updateMany
   */
  export type FuncionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionario upsert
   */
  export type FuncionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Funcionario to update in case it exists.
     */
    where: FuncionarioWhereUniqueInput
    /**
     * In case the Funcionario found by the `where` argument doesn't exist, create a new Funcionario with this data.
     */
    create: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
    /**
     * In case the Funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
  }

  /**
   * Funcionario delete
   */
  export type FuncionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter which Funcionario to delete.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario deleteMany
   */
  export type FuncionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to delete
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to delete.
     */
    limit?: number
  }

  /**
   * Funcionario without action
   */
  export type FuncionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
  }


  /**
   * Model MovimentoEstoque
   */

  export type AggregateMovimentoEstoque = {
    _count: MovimentoEstoqueCountAggregateOutputType | null
    _avg: MovimentoEstoqueAvgAggregateOutputType | null
    _sum: MovimentoEstoqueSumAggregateOutputType | null
    _min: MovimentoEstoqueMinAggregateOutputType | null
    _max: MovimentoEstoqueMaxAggregateOutputType | null
  }

  export type MovimentoEstoqueAvgAggregateOutputType = {
    estoque_id: number | null
    produto_id: number | null
    quantidade: number | null
  }

  export type MovimentoEstoqueSumAggregateOutputType = {
    estoque_id: number | null
    produto_id: number | null
    quantidade: number | null
  }

  export type MovimentoEstoqueMinAggregateOutputType = {
    estoque_id: number | null
    produto_id: number | null
    tipo: $Enums.Tipo | null
    quantidade: number | null
    data_movimento: Date | null
  }

  export type MovimentoEstoqueMaxAggregateOutputType = {
    estoque_id: number | null
    produto_id: number | null
    tipo: $Enums.Tipo | null
    quantidade: number | null
    data_movimento: Date | null
  }

  export type MovimentoEstoqueCountAggregateOutputType = {
    estoque_id: number
    produto_id: number
    tipo: number
    quantidade: number
    data_movimento: number
    _all: number
  }


  export type MovimentoEstoqueAvgAggregateInputType = {
    estoque_id?: true
    produto_id?: true
    quantidade?: true
  }

  export type MovimentoEstoqueSumAggregateInputType = {
    estoque_id?: true
    produto_id?: true
    quantidade?: true
  }

  export type MovimentoEstoqueMinAggregateInputType = {
    estoque_id?: true
    produto_id?: true
    tipo?: true
    quantidade?: true
    data_movimento?: true
  }

  export type MovimentoEstoqueMaxAggregateInputType = {
    estoque_id?: true
    produto_id?: true
    tipo?: true
    quantidade?: true
    data_movimento?: true
  }

  export type MovimentoEstoqueCountAggregateInputType = {
    estoque_id?: true
    produto_id?: true
    tipo?: true
    quantidade?: true
    data_movimento?: true
    _all?: true
  }

  export type MovimentoEstoqueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimentoEstoque to aggregate.
     */
    where?: MovimentoEstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimentoEstoques to fetch.
     */
    orderBy?: MovimentoEstoqueOrderByWithRelationInput | MovimentoEstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovimentoEstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimentoEstoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimentoEstoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovimentoEstoques
    **/
    _count?: true | MovimentoEstoqueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimentoEstoqueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimentoEstoqueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimentoEstoqueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimentoEstoqueMaxAggregateInputType
  }

  export type GetMovimentoEstoqueAggregateType<T extends MovimentoEstoqueAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimentoEstoque]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimentoEstoque[P]>
      : GetScalarType<T[P], AggregateMovimentoEstoque[P]>
  }




  export type MovimentoEstoqueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentoEstoqueWhereInput
    orderBy?: MovimentoEstoqueOrderByWithAggregationInput | MovimentoEstoqueOrderByWithAggregationInput[]
    by: MovimentoEstoqueScalarFieldEnum[] | MovimentoEstoqueScalarFieldEnum
    having?: MovimentoEstoqueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimentoEstoqueCountAggregateInputType | true
    _avg?: MovimentoEstoqueAvgAggregateInputType
    _sum?: MovimentoEstoqueSumAggregateInputType
    _min?: MovimentoEstoqueMinAggregateInputType
    _max?: MovimentoEstoqueMaxAggregateInputType
  }

  export type MovimentoEstoqueGroupByOutputType = {
    estoque_id: number
    produto_id: number
    tipo: $Enums.Tipo
    quantidade: number
    data_movimento: Date
    _count: MovimentoEstoqueCountAggregateOutputType | null
    _avg: MovimentoEstoqueAvgAggregateOutputType | null
    _sum: MovimentoEstoqueSumAggregateOutputType | null
    _min: MovimentoEstoqueMinAggregateOutputType | null
    _max: MovimentoEstoqueMaxAggregateOutputType | null
  }

  type GetMovimentoEstoqueGroupByPayload<T extends MovimentoEstoqueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimentoEstoqueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimentoEstoqueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimentoEstoqueGroupByOutputType[P]>
            : GetScalarType<T[P], MovimentoEstoqueGroupByOutputType[P]>
        }
      >
    >


  export type MovimentoEstoqueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    estoque_id?: boolean
    produto_id?: boolean
    tipo?: boolean
    quantidade?: boolean
    data_movimento?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimentoEstoque"]>



  export type MovimentoEstoqueSelectScalar = {
    estoque_id?: boolean
    produto_id?: boolean
    tipo?: boolean
    quantidade?: boolean
    data_movimento?: boolean
  }

  export type MovimentoEstoqueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"estoque_id" | "produto_id" | "tipo" | "quantidade" | "data_movimento", ExtArgs["result"]["movimentoEstoque"]>
  export type MovimentoEstoqueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }

  export type $MovimentoEstoquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovimentoEstoque"
    objects: {
      produto: Prisma.$ProdutoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      estoque_id: number
      produto_id: number
      tipo: $Enums.Tipo
      quantidade: number
      data_movimento: Date
    }, ExtArgs["result"]["movimentoEstoque"]>
    composites: {}
  }

  type MovimentoEstoqueGetPayload<S extends boolean | null | undefined | MovimentoEstoqueDefaultArgs> = $Result.GetResult<Prisma.$MovimentoEstoquePayload, S>

  type MovimentoEstoqueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovimentoEstoqueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovimentoEstoqueCountAggregateInputType | true
    }

  export interface MovimentoEstoqueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovimentoEstoque'], meta: { name: 'MovimentoEstoque' } }
    /**
     * Find zero or one MovimentoEstoque that matches the filter.
     * @param {MovimentoEstoqueFindUniqueArgs} args - Arguments to find a MovimentoEstoque
     * @example
     * // Get one MovimentoEstoque
     * const movimentoEstoque = await prisma.movimentoEstoque.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovimentoEstoqueFindUniqueArgs>(args: SelectSubset<T, MovimentoEstoqueFindUniqueArgs<ExtArgs>>): Prisma__MovimentoEstoqueClient<$Result.GetResult<Prisma.$MovimentoEstoquePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovimentoEstoque that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovimentoEstoqueFindUniqueOrThrowArgs} args - Arguments to find a MovimentoEstoque
     * @example
     * // Get one MovimentoEstoque
     * const movimentoEstoque = await prisma.movimentoEstoque.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovimentoEstoqueFindUniqueOrThrowArgs>(args: SelectSubset<T, MovimentoEstoqueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovimentoEstoqueClient<$Result.GetResult<Prisma.$MovimentoEstoquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimentoEstoque that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentoEstoqueFindFirstArgs} args - Arguments to find a MovimentoEstoque
     * @example
     * // Get one MovimentoEstoque
     * const movimentoEstoque = await prisma.movimentoEstoque.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovimentoEstoqueFindFirstArgs>(args?: SelectSubset<T, MovimentoEstoqueFindFirstArgs<ExtArgs>>): Prisma__MovimentoEstoqueClient<$Result.GetResult<Prisma.$MovimentoEstoquePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimentoEstoque that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentoEstoqueFindFirstOrThrowArgs} args - Arguments to find a MovimentoEstoque
     * @example
     * // Get one MovimentoEstoque
     * const movimentoEstoque = await prisma.movimentoEstoque.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovimentoEstoqueFindFirstOrThrowArgs>(args?: SelectSubset<T, MovimentoEstoqueFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovimentoEstoqueClient<$Result.GetResult<Prisma.$MovimentoEstoquePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovimentoEstoques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentoEstoqueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovimentoEstoques
     * const movimentoEstoques = await prisma.movimentoEstoque.findMany()
     * 
     * // Get first 10 MovimentoEstoques
     * const movimentoEstoques = await prisma.movimentoEstoque.findMany({ take: 10 })
     * 
     * // Only select the `estoque_id`
     * const movimentoEstoqueWithEstoque_idOnly = await prisma.movimentoEstoque.findMany({ select: { estoque_id: true } })
     * 
     */
    findMany<T extends MovimentoEstoqueFindManyArgs>(args?: SelectSubset<T, MovimentoEstoqueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentoEstoquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovimentoEstoque.
     * @param {MovimentoEstoqueCreateArgs} args - Arguments to create a MovimentoEstoque.
     * @example
     * // Create one MovimentoEstoque
     * const MovimentoEstoque = await prisma.movimentoEstoque.create({
     *   data: {
     *     // ... data to create a MovimentoEstoque
     *   }
     * })
     * 
     */
    create<T extends MovimentoEstoqueCreateArgs>(args: SelectSubset<T, MovimentoEstoqueCreateArgs<ExtArgs>>): Prisma__MovimentoEstoqueClient<$Result.GetResult<Prisma.$MovimentoEstoquePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovimentoEstoques.
     * @param {MovimentoEstoqueCreateManyArgs} args - Arguments to create many MovimentoEstoques.
     * @example
     * // Create many MovimentoEstoques
     * const movimentoEstoque = await prisma.movimentoEstoque.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovimentoEstoqueCreateManyArgs>(args?: SelectSubset<T, MovimentoEstoqueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MovimentoEstoque.
     * @param {MovimentoEstoqueDeleteArgs} args - Arguments to delete one MovimentoEstoque.
     * @example
     * // Delete one MovimentoEstoque
     * const MovimentoEstoque = await prisma.movimentoEstoque.delete({
     *   where: {
     *     // ... filter to delete one MovimentoEstoque
     *   }
     * })
     * 
     */
    delete<T extends MovimentoEstoqueDeleteArgs>(args: SelectSubset<T, MovimentoEstoqueDeleteArgs<ExtArgs>>): Prisma__MovimentoEstoqueClient<$Result.GetResult<Prisma.$MovimentoEstoquePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovimentoEstoque.
     * @param {MovimentoEstoqueUpdateArgs} args - Arguments to update one MovimentoEstoque.
     * @example
     * // Update one MovimentoEstoque
     * const movimentoEstoque = await prisma.movimentoEstoque.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovimentoEstoqueUpdateArgs>(args: SelectSubset<T, MovimentoEstoqueUpdateArgs<ExtArgs>>): Prisma__MovimentoEstoqueClient<$Result.GetResult<Prisma.$MovimentoEstoquePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovimentoEstoques.
     * @param {MovimentoEstoqueDeleteManyArgs} args - Arguments to filter MovimentoEstoques to delete.
     * @example
     * // Delete a few MovimentoEstoques
     * const { count } = await prisma.movimentoEstoque.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovimentoEstoqueDeleteManyArgs>(args?: SelectSubset<T, MovimentoEstoqueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovimentoEstoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentoEstoqueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovimentoEstoques
     * const movimentoEstoque = await prisma.movimentoEstoque.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovimentoEstoqueUpdateManyArgs>(args: SelectSubset<T, MovimentoEstoqueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MovimentoEstoque.
     * @param {MovimentoEstoqueUpsertArgs} args - Arguments to update or create a MovimentoEstoque.
     * @example
     * // Update or create a MovimentoEstoque
     * const movimentoEstoque = await prisma.movimentoEstoque.upsert({
     *   create: {
     *     // ... data to create a MovimentoEstoque
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovimentoEstoque we want to update
     *   }
     * })
     */
    upsert<T extends MovimentoEstoqueUpsertArgs>(args: SelectSubset<T, MovimentoEstoqueUpsertArgs<ExtArgs>>): Prisma__MovimentoEstoqueClient<$Result.GetResult<Prisma.$MovimentoEstoquePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovimentoEstoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentoEstoqueCountArgs} args - Arguments to filter MovimentoEstoques to count.
     * @example
     * // Count the number of MovimentoEstoques
     * const count = await prisma.movimentoEstoque.count({
     *   where: {
     *     // ... the filter for the MovimentoEstoques we want to count
     *   }
     * })
    **/
    count<T extends MovimentoEstoqueCountArgs>(
      args?: Subset<T, MovimentoEstoqueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimentoEstoqueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovimentoEstoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentoEstoqueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovimentoEstoqueAggregateArgs>(args: Subset<T, MovimentoEstoqueAggregateArgs>): Prisma.PrismaPromise<GetMovimentoEstoqueAggregateType<T>>

    /**
     * Group by MovimentoEstoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentoEstoqueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovimentoEstoqueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovimentoEstoqueGroupByArgs['orderBy'] }
        : { orderBy?: MovimentoEstoqueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovimentoEstoqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimentoEstoqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovimentoEstoque model
   */
  readonly fields: MovimentoEstoqueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovimentoEstoque.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovimentoEstoqueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MovimentoEstoque model
   */
  interface MovimentoEstoqueFieldRefs {
    readonly estoque_id: FieldRef<"MovimentoEstoque", 'Int'>
    readonly produto_id: FieldRef<"MovimentoEstoque", 'Int'>
    readonly tipo: FieldRef<"MovimentoEstoque", 'Tipo'>
    readonly quantidade: FieldRef<"MovimentoEstoque", 'Int'>
    readonly data_movimento: FieldRef<"MovimentoEstoque", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MovimentoEstoque findUnique
   */
  export type MovimentoEstoqueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentoEstoque
     */
    select?: MovimentoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentoEstoque
     */
    omit?: MovimentoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentoEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which MovimentoEstoque to fetch.
     */
    where: MovimentoEstoqueWhereUniqueInput
  }

  /**
   * MovimentoEstoque findUniqueOrThrow
   */
  export type MovimentoEstoqueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentoEstoque
     */
    select?: MovimentoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentoEstoque
     */
    omit?: MovimentoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentoEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which MovimentoEstoque to fetch.
     */
    where: MovimentoEstoqueWhereUniqueInput
  }

  /**
   * MovimentoEstoque findFirst
   */
  export type MovimentoEstoqueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentoEstoque
     */
    select?: MovimentoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentoEstoque
     */
    omit?: MovimentoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentoEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which MovimentoEstoque to fetch.
     */
    where?: MovimentoEstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimentoEstoques to fetch.
     */
    orderBy?: MovimentoEstoqueOrderByWithRelationInput | MovimentoEstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimentoEstoques.
     */
    cursor?: MovimentoEstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimentoEstoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimentoEstoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimentoEstoques.
     */
    distinct?: MovimentoEstoqueScalarFieldEnum | MovimentoEstoqueScalarFieldEnum[]
  }

  /**
   * MovimentoEstoque findFirstOrThrow
   */
  export type MovimentoEstoqueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentoEstoque
     */
    select?: MovimentoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentoEstoque
     */
    omit?: MovimentoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentoEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which MovimentoEstoque to fetch.
     */
    where?: MovimentoEstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimentoEstoques to fetch.
     */
    orderBy?: MovimentoEstoqueOrderByWithRelationInput | MovimentoEstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimentoEstoques.
     */
    cursor?: MovimentoEstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimentoEstoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimentoEstoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimentoEstoques.
     */
    distinct?: MovimentoEstoqueScalarFieldEnum | MovimentoEstoqueScalarFieldEnum[]
  }

  /**
   * MovimentoEstoque findMany
   */
  export type MovimentoEstoqueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentoEstoque
     */
    select?: MovimentoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentoEstoque
     */
    omit?: MovimentoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentoEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which MovimentoEstoques to fetch.
     */
    where?: MovimentoEstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimentoEstoques to fetch.
     */
    orderBy?: MovimentoEstoqueOrderByWithRelationInput | MovimentoEstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovimentoEstoques.
     */
    cursor?: MovimentoEstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimentoEstoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimentoEstoques.
     */
    skip?: number
    distinct?: MovimentoEstoqueScalarFieldEnum | MovimentoEstoqueScalarFieldEnum[]
  }

  /**
   * MovimentoEstoque create
   */
  export type MovimentoEstoqueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentoEstoque
     */
    select?: MovimentoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentoEstoque
     */
    omit?: MovimentoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentoEstoqueInclude<ExtArgs> | null
    /**
     * The data needed to create a MovimentoEstoque.
     */
    data: XOR<MovimentoEstoqueCreateInput, MovimentoEstoqueUncheckedCreateInput>
  }

  /**
   * MovimentoEstoque createMany
   */
  export type MovimentoEstoqueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovimentoEstoques.
     */
    data: MovimentoEstoqueCreateManyInput | MovimentoEstoqueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovimentoEstoque update
   */
  export type MovimentoEstoqueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentoEstoque
     */
    select?: MovimentoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentoEstoque
     */
    omit?: MovimentoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentoEstoqueInclude<ExtArgs> | null
    /**
     * The data needed to update a MovimentoEstoque.
     */
    data: XOR<MovimentoEstoqueUpdateInput, MovimentoEstoqueUncheckedUpdateInput>
    /**
     * Choose, which MovimentoEstoque to update.
     */
    where: MovimentoEstoqueWhereUniqueInput
  }

  /**
   * MovimentoEstoque updateMany
   */
  export type MovimentoEstoqueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovimentoEstoques.
     */
    data: XOR<MovimentoEstoqueUpdateManyMutationInput, MovimentoEstoqueUncheckedUpdateManyInput>
    /**
     * Filter which MovimentoEstoques to update
     */
    where?: MovimentoEstoqueWhereInput
    /**
     * Limit how many MovimentoEstoques to update.
     */
    limit?: number
  }

  /**
   * MovimentoEstoque upsert
   */
  export type MovimentoEstoqueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentoEstoque
     */
    select?: MovimentoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentoEstoque
     */
    omit?: MovimentoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentoEstoqueInclude<ExtArgs> | null
    /**
     * The filter to search for the MovimentoEstoque to update in case it exists.
     */
    where: MovimentoEstoqueWhereUniqueInput
    /**
     * In case the MovimentoEstoque found by the `where` argument doesn't exist, create a new MovimentoEstoque with this data.
     */
    create: XOR<MovimentoEstoqueCreateInput, MovimentoEstoqueUncheckedCreateInput>
    /**
     * In case the MovimentoEstoque was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovimentoEstoqueUpdateInput, MovimentoEstoqueUncheckedUpdateInput>
  }

  /**
   * MovimentoEstoque delete
   */
  export type MovimentoEstoqueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentoEstoque
     */
    select?: MovimentoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentoEstoque
     */
    omit?: MovimentoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentoEstoqueInclude<ExtArgs> | null
    /**
     * Filter which MovimentoEstoque to delete.
     */
    where: MovimentoEstoqueWhereUniqueInput
  }

  /**
   * MovimentoEstoque deleteMany
   */
  export type MovimentoEstoqueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimentoEstoques to delete
     */
    where?: MovimentoEstoqueWhereInput
    /**
     * Limit how many MovimentoEstoques to delete.
     */
    limit?: number
  }

  /**
   * MovimentoEstoque without action
   */
  export type MovimentoEstoqueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentoEstoque
     */
    select?: MovimentoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentoEstoque
     */
    omit?: MovimentoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentoEstoqueInclude<ExtArgs> | null
  }


  /**
   * Model Fornecedor
   */

  export type AggregateFornecedor = {
    _count: FornecedorCountAggregateOutputType | null
    _avg: FornecedorAvgAggregateOutputType | null
    _sum: FornecedorSumAggregateOutputType | null
    _min: FornecedorMinAggregateOutputType | null
    _max: FornecedorMaxAggregateOutputType | null
  }

  export type FornecedorAvgAggregateOutputType = {
    fornecedor_id: number | null
  }

  export type FornecedorSumAggregateOutputType = {
    fornecedor_id: number | null
  }

  export type FornecedorMinAggregateOutputType = {
    fornecedor_id: number | null
    nome: string | null
    telefone: string | null
  }

  export type FornecedorMaxAggregateOutputType = {
    fornecedor_id: number | null
    nome: string | null
    telefone: string | null
  }

  export type FornecedorCountAggregateOutputType = {
    fornecedor_id: number
    nome: number
    telefone: number
    _all: number
  }


  export type FornecedorAvgAggregateInputType = {
    fornecedor_id?: true
  }

  export type FornecedorSumAggregateInputType = {
    fornecedor_id?: true
  }

  export type FornecedorMinAggregateInputType = {
    fornecedor_id?: true
    nome?: true
    telefone?: true
  }

  export type FornecedorMaxAggregateInputType = {
    fornecedor_id?: true
    nome?: true
    telefone?: true
  }

  export type FornecedorCountAggregateInputType = {
    fornecedor_id?: true
    nome?: true
    telefone?: true
    _all?: true
  }

  export type FornecedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fornecedor to aggregate.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: FornecedorOrderByWithRelationInput | FornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fornecedors
    **/
    _count?: true | FornecedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FornecedorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FornecedorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FornecedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FornecedorMaxAggregateInputType
  }

  export type GetFornecedorAggregateType<T extends FornecedorAggregateArgs> = {
        [P in keyof T & keyof AggregateFornecedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFornecedor[P]>
      : GetScalarType<T[P], AggregateFornecedor[P]>
  }




  export type FornecedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FornecedorWhereInput
    orderBy?: FornecedorOrderByWithAggregationInput | FornecedorOrderByWithAggregationInput[]
    by: FornecedorScalarFieldEnum[] | FornecedorScalarFieldEnum
    having?: FornecedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FornecedorCountAggregateInputType | true
    _avg?: FornecedorAvgAggregateInputType
    _sum?: FornecedorSumAggregateInputType
    _min?: FornecedorMinAggregateInputType
    _max?: FornecedorMaxAggregateInputType
  }

  export type FornecedorGroupByOutputType = {
    fornecedor_id: number
    nome: string
    telefone: string
    _count: FornecedorCountAggregateOutputType | null
    _avg: FornecedorAvgAggregateOutputType | null
    _sum: FornecedorSumAggregateOutputType | null
    _min: FornecedorMinAggregateOutputType | null
    _max: FornecedorMaxAggregateOutputType | null
  }

  type GetFornecedorGroupByPayload<T extends FornecedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FornecedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FornecedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FornecedorGroupByOutputType[P]>
            : GetScalarType<T[P], FornecedorGroupByOutputType[P]>
        }
      >
    >


  export type FornecedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fornecedor_id?: boolean
    nome?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["fornecedor"]>



  export type FornecedorSelectScalar = {
    fornecedor_id?: boolean
    nome?: boolean
    telefone?: boolean
  }

  export type FornecedorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fornecedor_id" | "nome" | "telefone", ExtArgs["result"]["fornecedor"]>

  export type $FornecedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fornecedor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      fornecedor_id: number
      nome: string
      telefone: string
    }, ExtArgs["result"]["fornecedor"]>
    composites: {}
  }

  type FornecedorGetPayload<S extends boolean | null | undefined | FornecedorDefaultArgs> = $Result.GetResult<Prisma.$FornecedorPayload, S>

  type FornecedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FornecedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FornecedorCountAggregateInputType | true
    }

  export interface FornecedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fornecedor'], meta: { name: 'Fornecedor' } }
    /**
     * Find zero or one Fornecedor that matches the filter.
     * @param {FornecedorFindUniqueArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FornecedorFindUniqueArgs>(args: SelectSubset<T, FornecedorFindUniqueArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fornecedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FornecedorFindUniqueOrThrowArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FornecedorFindUniqueOrThrowArgs>(args: SelectSubset<T, FornecedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fornecedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorFindFirstArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FornecedorFindFirstArgs>(args?: SelectSubset<T, FornecedorFindFirstArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fornecedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorFindFirstOrThrowArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FornecedorFindFirstOrThrowArgs>(args?: SelectSubset<T, FornecedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fornecedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fornecedors
     * const fornecedors = await prisma.fornecedor.findMany()
     * 
     * // Get first 10 Fornecedors
     * const fornecedors = await prisma.fornecedor.findMany({ take: 10 })
     * 
     * // Only select the `fornecedor_id`
     * const fornecedorWithFornecedor_idOnly = await prisma.fornecedor.findMany({ select: { fornecedor_id: true } })
     * 
     */
    findMany<T extends FornecedorFindManyArgs>(args?: SelectSubset<T, FornecedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fornecedor.
     * @param {FornecedorCreateArgs} args - Arguments to create a Fornecedor.
     * @example
     * // Create one Fornecedor
     * const Fornecedor = await prisma.fornecedor.create({
     *   data: {
     *     // ... data to create a Fornecedor
     *   }
     * })
     * 
     */
    create<T extends FornecedorCreateArgs>(args: SelectSubset<T, FornecedorCreateArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fornecedors.
     * @param {FornecedorCreateManyArgs} args - Arguments to create many Fornecedors.
     * @example
     * // Create many Fornecedors
     * const fornecedor = await prisma.fornecedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FornecedorCreateManyArgs>(args?: SelectSubset<T, FornecedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fornecedor.
     * @param {FornecedorDeleteArgs} args - Arguments to delete one Fornecedor.
     * @example
     * // Delete one Fornecedor
     * const Fornecedor = await prisma.fornecedor.delete({
     *   where: {
     *     // ... filter to delete one Fornecedor
     *   }
     * })
     * 
     */
    delete<T extends FornecedorDeleteArgs>(args: SelectSubset<T, FornecedorDeleteArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fornecedor.
     * @param {FornecedorUpdateArgs} args - Arguments to update one Fornecedor.
     * @example
     * // Update one Fornecedor
     * const fornecedor = await prisma.fornecedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FornecedorUpdateArgs>(args: SelectSubset<T, FornecedorUpdateArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fornecedors.
     * @param {FornecedorDeleteManyArgs} args - Arguments to filter Fornecedors to delete.
     * @example
     * // Delete a few Fornecedors
     * const { count } = await prisma.fornecedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FornecedorDeleteManyArgs>(args?: SelectSubset<T, FornecedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fornecedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fornecedors
     * const fornecedor = await prisma.fornecedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FornecedorUpdateManyArgs>(args: SelectSubset<T, FornecedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fornecedor.
     * @param {FornecedorUpsertArgs} args - Arguments to update or create a Fornecedor.
     * @example
     * // Update or create a Fornecedor
     * const fornecedor = await prisma.fornecedor.upsert({
     *   create: {
     *     // ... data to create a Fornecedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fornecedor we want to update
     *   }
     * })
     */
    upsert<T extends FornecedorUpsertArgs>(args: SelectSubset<T, FornecedorUpsertArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fornecedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorCountArgs} args - Arguments to filter Fornecedors to count.
     * @example
     * // Count the number of Fornecedors
     * const count = await prisma.fornecedor.count({
     *   where: {
     *     // ... the filter for the Fornecedors we want to count
     *   }
     * })
    **/
    count<T extends FornecedorCountArgs>(
      args?: Subset<T, FornecedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FornecedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fornecedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FornecedorAggregateArgs>(args: Subset<T, FornecedorAggregateArgs>): Prisma.PrismaPromise<GetFornecedorAggregateType<T>>

    /**
     * Group by Fornecedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FornecedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FornecedorGroupByArgs['orderBy'] }
        : { orderBy?: FornecedorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FornecedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFornecedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fornecedor model
   */
  readonly fields: FornecedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fornecedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FornecedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fornecedor model
   */
  interface FornecedorFieldRefs {
    readonly fornecedor_id: FieldRef<"Fornecedor", 'Int'>
    readonly nome: FieldRef<"Fornecedor", 'String'>
    readonly telefone: FieldRef<"Fornecedor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fornecedor findUnique
   */
  export type FornecedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor findUniqueOrThrow
   */
  export type FornecedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor findFirst
   */
  export type FornecedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: FornecedorOrderByWithRelationInput | FornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fornecedors.
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fornecedors.
     */
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * Fornecedor findFirstOrThrow
   */
  export type FornecedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: FornecedorOrderByWithRelationInput | FornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fornecedors.
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fornecedors.
     */
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * Fornecedor findMany
   */
  export type FornecedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Filter, which Fornecedors to fetch.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: FornecedorOrderByWithRelationInput | FornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fornecedors.
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * Fornecedor create
   */
  export type FornecedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * The data needed to create a Fornecedor.
     */
    data: XOR<FornecedorCreateInput, FornecedorUncheckedCreateInput>
  }

  /**
   * Fornecedor createMany
   */
  export type FornecedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fornecedors.
     */
    data: FornecedorCreateManyInput | FornecedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fornecedor update
   */
  export type FornecedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * The data needed to update a Fornecedor.
     */
    data: XOR<FornecedorUpdateInput, FornecedorUncheckedUpdateInput>
    /**
     * Choose, which Fornecedor to update.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor updateMany
   */
  export type FornecedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fornecedors.
     */
    data: XOR<FornecedorUpdateManyMutationInput, FornecedorUncheckedUpdateManyInput>
    /**
     * Filter which Fornecedors to update
     */
    where?: FornecedorWhereInput
    /**
     * Limit how many Fornecedors to update.
     */
    limit?: number
  }

  /**
   * Fornecedor upsert
   */
  export type FornecedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * The filter to search for the Fornecedor to update in case it exists.
     */
    where: FornecedorWhereUniqueInput
    /**
     * In case the Fornecedor found by the `where` argument doesn't exist, create a new Fornecedor with this data.
     */
    create: XOR<FornecedorCreateInput, FornecedorUncheckedCreateInput>
    /**
     * In case the Fornecedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FornecedorUpdateInput, FornecedorUncheckedUpdateInput>
  }

  /**
   * Fornecedor delete
   */
  export type FornecedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Filter which Fornecedor to delete.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor deleteMany
   */
  export type FornecedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fornecedors to delete
     */
    where?: FornecedorWhereInput
    /**
     * Limit how many Fornecedors to delete.
     */
    limit?: number
  }

  /**
   * Fornecedor without action
   */
  export type FornecedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClienteScalarFieldEnum: {
    cliente_id: 'cliente_id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    telefone: 'telefone',
    endereco: 'endereco'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    produto_id: 'produto_id',
    nome: 'nome',
    preco: 'preco',
    descricao: 'descricao',
    qtd_estoque: 'qtd_estoque'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    pedido_id: 'pedido_id',
    cliente_id: 'cliente_id',
    data: 'data',
    sub_total: 'sub_total'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const Item_PedidoScalarFieldEnum: {
    item_id: 'item_id',
    pedido_id: 'pedido_id',
    produto_id: 'produto_id',
    data_venda: 'data_venda',
    quantidade: 'quantidade',
    preco_unitario: 'preco_unitario',
    forma_pagamento: 'forma_pagamento',
    valor_total: 'valor_total'
  };

  export type Item_PedidoScalarFieldEnum = (typeof Item_PedidoScalarFieldEnum)[keyof typeof Item_PedidoScalarFieldEnum]


  export const FuncionarioScalarFieldEnum: {
    funcionario_id: 'funcionario_id',
    nome: 'nome',
    cargo: 'cargo',
    telefone: 'telefone'
  };

  export type FuncionarioScalarFieldEnum = (typeof FuncionarioScalarFieldEnum)[keyof typeof FuncionarioScalarFieldEnum]


  export const MovimentoEstoqueScalarFieldEnum: {
    estoque_id: 'estoque_id',
    produto_id: 'produto_id',
    tipo: 'tipo',
    quantidade: 'quantidade',
    data_movimento: 'data_movimento'
  };

  export type MovimentoEstoqueScalarFieldEnum = (typeof MovimentoEstoqueScalarFieldEnum)[keyof typeof MovimentoEstoqueScalarFieldEnum]


  export const FornecedorScalarFieldEnum: {
    fornecedor_id: 'fornecedor_id',
    nome: 'nome',
    telefone: 'telefone'
  };

  export type FornecedorScalarFieldEnum = (typeof FornecedorScalarFieldEnum)[keyof typeof FornecedorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ClienteOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    telefone: 'telefone',
    endereco: 'endereco'
  };

  export type ClienteOrderByRelevanceFieldEnum = (typeof ClienteOrderByRelevanceFieldEnum)[keyof typeof ClienteOrderByRelevanceFieldEnum]


  export const ProdutoOrderByRelevanceFieldEnum: {
    nome: 'nome',
    descricao: 'descricao'
  };

  export type ProdutoOrderByRelevanceFieldEnum = (typeof ProdutoOrderByRelevanceFieldEnum)[keyof typeof ProdutoOrderByRelevanceFieldEnum]


  export const Item_PedidoOrderByRelevanceFieldEnum: {
    forma_pagamento: 'forma_pagamento'
  };

  export type Item_PedidoOrderByRelevanceFieldEnum = (typeof Item_PedidoOrderByRelevanceFieldEnum)[keyof typeof Item_PedidoOrderByRelevanceFieldEnum]


  export const FuncionarioOrderByRelevanceFieldEnum: {
    nome: 'nome',
    cargo: 'cargo',
    telefone: 'telefone'
  };

  export type FuncionarioOrderByRelevanceFieldEnum = (typeof FuncionarioOrderByRelevanceFieldEnum)[keyof typeof FuncionarioOrderByRelevanceFieldEnum]


  export const FornecedorOrderByRelevanceFieldEnum: {
    nome: 'nome',
    telefone: 'telefone'
  };

  export type FornecedorOrderByRelevanceFieldEnum = (typeof FornecedorOrderByRelevanceFieldEnum)[keyof typeof FornecedorOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Tipo'
   */
  export type EnumTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tipo'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    cliente_id?: IntFilter<"Cliente"> | number
    nome?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    senha?: StringFilter<"Cliente"> | string
    telefone?: StringFilter<"Cliente"> | string
    endereco?: StringNullableFilter<"Cliente"> | string | null
    pedidos?: PedidoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    cliente_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrderInput | SortOrder
    pedidos?: PedidoOrderByRelationAggregateInput
    _relevance?: ClienteOrderByRelevanceInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    cliente_id?: number
    email?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    senha?: StringFilter<"Cliente"> | string
    telefone?: StringFilter<"Cliente"> | string
    endereco?: StringNullableFilter<"Cliente"> | string | null
    pedidos?: PedidoListRelationFilter
  }, "cliente_id" | "email">

  export type ClienteOrderByWithAggregationInput = {
    cliente_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrderInput | SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    cliente_id?: IntWithAggregatesFilter<"Cliente"> | number
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringWithAggregatesFilter<"Cliente"> | string
    senha?: StringWithAggregatesFilter<"Cliente"> | string
    telefone?: StringWithAggregatesFilter<"Cliente"> | string
    endereco?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    produto_id?: IntFilter<"Produto"> | number
    nome?: StringFilter<"Produto"> | string
    preco?: FloatFilter<"Produto"> | number
    descricao?: StringFilter<"Produto"> | string
    qtd_estoque?: IntFilter<"Produto"> | number
    itens?: Item_PedidoListRelationFilter
    movimentos?: MovimentoEstoqueListRelationFilter
  }

  export type ProdutoOrderByWithRelationInput = {
    produto_id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    descricao?: SortOrder
    qtd_estoque?: SortOrder
    itens?: Item_PedidoOrderByRelationAggregateInput
    movimentos?: MovimentoEstoqueOrderByRelationAggregateInput
    _relevance?: ProdutoOrderByRelevanceInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    produto_id?: number
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    nome?: StringFilter<"Produto"> | string
    preco?: FloatFilter<"Produto"> | number
    descricao?: StringFilter<"Produto"> | string
    qtd_estoque?: IntFilter<"Produto"> | number
    itens?: Item_PedidoListRelationFilter
    movimentos?: MovimentoEstoqueListRelationFilter
  }, "produto_id">

  export type ProdutoOrderByWithAggregationInput = {
    produto_id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    descricao?: SortOrder
    qtd_estoque?: SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    produto_id?: IntWithAggregatesFilter<"Produto"> | number
    nome?: StringWithAggregatesFilter<"Produto"> | string
    preco?: FloatWithAggregatesFilter<"Produto"> | number
    descricao?: StringWithAggregatesFilter<"Produto"> | string
    qtd_estoque?: IntWithAggregatesFilter<"Produto"> | number
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    pedido_id?: IntFilter<"Pedido"> | number
    cliente_id?: IntFilter<"Pedido"> | number
    data?: DateTimeFilter<"Pedido"> | Date | string
    sub_total?: DecimalNullableFilter<"Pedido"> | Decimal | DecimalJsLike | number | string | null
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    itens?: Item_PedidoListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    pedido_id?: SortOrder
    cliente_id?: SortOrder
    data?: SortOrder
    sub_total?: SortOrderInput | SortOrder
    cliente?: ClienteOrderByWithRelationInput
    itens?: Item_PedidoOrderByRelationAggregateInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    pedido_id?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    cliente_id?: IntFilter<"Pedido"> | number
    data?: DateTimeFilter<"Pedido"> | Date | string
    sub_total?: DecimalNullableFilter<"Pedido"> | Decimal | DecimalJsLike | number | string | null
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    itens?: Item_PedidoListRelationFilter
  }, "pedido_id">

  export type PedidoOrderByWithAggregationInput = {
    pedido_id?: SortOrder
    cliente_id?: SortOrder
    data?: SortOrder
    sub_total?: SortOrderInput | SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    pedido_id?: IntWithAggregatesFilter<"Pedido"> | number
    cliente_id?: IntWithAggregatesFilter<"Pedido"> | number
    data?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    sub_total?: DecimalNullableWithAggregatesFilter<"Pedido"> | Decimal | DecimalJsLike | number | string | null
  }

  export type Item_PedidoWhereInput = {
    AND?: Item_PedidoWhereInput | Item_PedidoWhereInput[]
    OR?: Item_PedidoWhereInput[]
    NOT?: Item_PedidoWhereInput | Item_PedidoWhereInput[]
    item_id?: IntFilter<"Item_Pedido"> | number
    pedido_id?: IntFilter<"Item_Pedido"> | number
    produto_id?: IntFilter<"Item_Pedido"> | number
    data_venda?: DateTimeFilter<"Item_Pedido"> | Date | string
    quantidade?: IntFilter<"Item_Pedido"> | number
    preco_unitario?: FloatFilter<"Item_Pedido"> | number
    forma_pagamento?: StringNullableFilter<"Item_Pedido"> | string | null
    valor_total?: FloatNullableFilter<"Item_Pedido"> | number | null
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }

  export type Item_PedidoOrderByWithRelationInput = {
    item_id?: SortOrder
    pedido_id?: SortOrder
    produto_id?: SortOrder
    data_venda?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    forma_pagamento?: SortOrderInput | SortOrder
    valor_total?: SortOrderInput | SortOrder
    pedido?: PedidoOrderByWithRelationInput
    produto?: ProdutoOrderByWithRelationInput
    _relevance?: Item_PedidoOrderByRelevanceInput
  }

  export type Item_PedidoWhereUniqueInput = Prisma.AtLeast<{
    item_id?: number
    AND?: Item_PedidoWhereInput | Item_PedidoWhereInput[]
    OR?: Item_PedidoWhereInput[]
    NOT?: Item_PedidoWhereInput | Item_PedidoWhereInput[]
    pedido_id?: IntFilter<"Item_Pedido"> | number
    produto_id?: IntFilter<"Item_Pedido"> | number
    data_venda?: DateTimeFilter<"Item_Pedido"> | Date | string
    quantidade?: IntFilter<"Item_Pedido"> | number
    preco_unitario?: FloatFilter<"Item_Pedido"> | number
    forma_pagamento?: StringNullableFilter<"Item_Pedido"> | string | null
    valor_total?: FloatNullableFilter<"Item_Pedido"> | number | null
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }, "item_id">

  export type Item_PedidoOrderByWithAggregationInput = {
    item_id?: SortOrder
    pedido_id?: SortOrder
    produto_id?: SortOrder
    data_venda?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    forma_pagamento?: SortOrderInput | SortOrder
    valor_total?: SortOrderInput | SortOrder
    _count?: Item_PedidoCountOrderByAggregateInput
    _avg?: Item_PedidoAvgOrderByAggregateInput
    _max?: Item_PedidoMaxOrderByAggregateInput
    _min?: Item_PedidoMinOrderByAggregateInput
    _sum?: Item_PedidoSumOrderByAggregateInput
  }

  export type Item_PedidoScalarWhereWithAggregatesInput = {
    AND?: Item_PedidoScalarWhereWithAggregatesInput | Item_PedidoScalarWhereWithAggregatesInput[]
    OR?: Item_PedidoScalarWhereWithAggregatesInput[]
    NOT?: Item_PedidoScalarWhereWithAggregatesInput | Item_PedidoScalarWhereWithAggregatesInput[]
    item_id?: IntWithAggregatesFilter<"Item_Pedido"> | number
    pedido_id?: IntWithAggregatesFilter<"Item_Pedido"> | number
    produto_id?: IntWithAggregatesFilter<"Item_Pedido"> | number
    data_venda?: DateTimeWithAggregatesFilter<"Item_Pedido"> | Date | string
    quantidade?: IntWithAggregatesFilter<"Item_Pedido"> | number
    preco_unitario?: FloatWithAggregatesFilter<"Item_Pedido"> | number
    forma_pagamento?: StringNullableWithAggregatesFilter<"Item_Pedido"> | string | null
    valor_total?: FloatNullableWithAggregatesFilter<"Item_Pedido"> | number | null
  }

  export type FuncionarioWhereInput = {
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    funcionario_id?: IntFilter<"Funcionario"> | number
    nome?: StringFilter<"Funcionario"> | string
    cargo?: StringFilter<"Funcionario"> | string
    telefone?: StringFilter<"Funcionario"> | string
  }

  export type FuncionarioOrderByWithRelationInput = {
    funcionario_id?: SortOrder
    nome?: SortOrder
    cargo?: SortOrder
    telefone?: SortOrder
    _relevance?: FuncionarioOrderByRelevanceInput
  }

  export type FuncionarioWhereUniqueInput = Prisma.AtLeast<{
    funcionario_id?: number
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    nome?: StringFilter<"Funcionario"> | string
    cargo?: StringFilter<"Funcionario"> | string
    telefone?: StringFilter<"Funcionario"> | string
  }, "funcionario_id">

  export type FuncionarioOrderByWithAggregationInput = {
    funcionario_id?: SortOrder
    nome?: SortOrder
    cargo?: SortOrder
    telefone?: SortOrder
    _count?: FuncionarioCountOrderByAggregateInput
    _avg?: FuncionarioAvgOrderByAggregateInput
    _max?: FuncionarioMaxOrderByAggregateInput
    _min?: FuncionarioMinOrderByAggregateInput
    _sum?: FuncionarioSumOrderByAggregateInput
  }

  export type FuncionarioScalarWhereWithAggregatesInput = {
    AND?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    OR?: FuncionarioScalarWhereWithAggregatesInput[]
    NOT?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    funcionario_id?: IntWithAggregatesFilter<"Funcionario"> | number
    nome?: StringWithAggregatesFilter<"Funcionario"> | string
    cargo?: StringWithAggregatesFilter<"Funcionario"> | string
    telefone?: StringWithAggregatesFilter<"Funcionario"> | string
  }

  export type MovimentoEstoqueWhereInput = {
    AND?: MovimentoEstoqueWhereInput | MovimentoEstoqueWhereInput[]
    OR?: MovimentoEstoqueWhereInput[]
    NOT?: MovimentoEstoqueWhereInput | MovimentoEstoqueWhereInput[]
    estoque_id?: IntFilter<"MovimentoEstoque"> | number
    produto_id?: IntFilter<"MovimentoEstoque"> | number
    tipo?: EnumTipoFilter<"MovimentoEstoque"> | $Enums.Tipo
    quantidade?: IntFilter<"MovimentoEstoque"> | number
    data_movimento?: DateTimeFilter<"MovimentoEstoque"> | Date | string
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }

  export type MovimentoEstoqueOrderByWithRelationInput = {
    estoque_id?: SortOrder
    produto_id?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    data_movimento?: SortOrder
    produto?: ProdutoOrderByWithRelationInput
  }

  export type MovimentoEstoqueWhereUniqueInput = Prisma.AtLeast<{
    estoque_id?: number
    AND?: MovimentoEstoqueWhereInput | MovimentoEstoqueWhereInput[]
    OR?: MovimentoEstoqueWhereInput[]
    NOT?: MovimentoEstoqueWhereInput | MovimentoEstoqueWhereInput[]
    produto_id?: IntFilter<"MovimentoEstoque"> | number
    tipo?: EnumTipoFilter<"MovimentoEstoque"> | $Enums.Tipo
    quantidade?: IntFilter<"MovimentoEstoque"> | number
    data_movimento?: DateTimeFilter<"MovimentoEstoque"> | Date | string
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }, "estoque_id">

  export type MovimentoEstoqueOrderByWithAggregationInput = {
    estoque_id?: SortOrder
    produto_id?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    data_movimento?: SortOrder
    _count?: MovimentoEstoqueCountOrderByAggregateInput
    _avg?: MovimentoEstoqueAvgOrderByAggregateInput
    _max?: MovimentoEstoqueMaxOrderByAggregateInput
    _min?: MovimentoEstoqueMinOrderByAggregateInput
    _sum?: MovimentoEstoqueSumOrderByAggregateInput
  }

  export type MovimentoEstoqueScalarWhereWithAggregatesInput = {
    AND?: MovimentoEstoqueScalarWhereWithAggregatesInput | MovimentoEstoqueScalarWhereWithAggregatesInput[]
    OR?: MovimentoEstoqueScalarWhereWithAggregatesInput[]
    NOT?: MovimentoEstoqueScalarWhereWithAggregatesInput | MovimentoEstoqueScalarWhereWithAggregatesInput[]
    estoque_id?: IntWithAggregatesFilter<"MovimentoEstoque"> | number
    produto_id?: IntWithAggregatesFilter<"MovimentoEstoque"> | number
    tipo?: EnumTipoWithAggregatesFilter<"MovimentoEstoque"> | $Enums.Tipo
    quantidade?: IntWithAggregatesFilter<"MovimentoEstoque"> | number
    data_movimento?: DateTimeWithAggregatesFilter<"MovimentoEstoque"> | Date | string
  }

  export type FornecedorWhereInput = {
    AND?: FornecedorWhereInput | FornecedorWhereInput[]
    OR?: FornecedorWhereInput[]
    NOT?: FornecedorWhereInput | FornecedorWhereInput[]
    fornecedor_id?: IntFilter<"Fornecedor"> | number
    nome?: StringFilter<"Fornecedor"> | string
    telefone?: StringFilter<"Fornecedor"> | string
  }

  export type FornecedorOrderByWithRelationInput = {
    fornecedor_id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    _relevance?: FornecedorOrderByRelevanceInput
  }

  export type FornecedorWhereUniqueInput = Prisma.AtLeast<{
    fornecedor_id?: number
    AND?: FornecedorWhereInput | FornecedorWhereInput[]
    OR?: FornecedorWhereInput[]
    NOT?: FornecedorWhereInput | FornecedorWhereInput[]
    nome?: StringFilter<"Fornecedor"> | string
    telefone?: StringFilter<"Fornecedor"> | string
  }, "fornecedor_id">

  export type FornecedorOrderByWithAggregationInput = {
    fornecedor_id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    _count?: FornecedorCountOrderByAggregateInput
    _avg?: FornecedorAvgOrderByAggregateInput
    _max?: FornecedorMaxOrderByAggregateInput
    _min?: FornecedorMinOrderByAggregateInput
    _sum?: FornecedorSumOrderByAggregateInput
  }

  export type FornecedorScalarWhereWithAggregatesInput = {
    AND?: FornecedorScalarWhereWithAggregatesInput | FornecedorScalarWhereWithAggregatesInput[]
    OR?: FornecedorScalarWhereWithAggregatesInput[]
    NOT?: FornecedorScalarWhereWithAggregatesInput | FornecedorScalarWhereWithAggregatesInput[]
    fornecedor_id?: IntWithAggregatesFilter<"Fornecedor"> | number
    nome?: StringWithAggregatesFilter<"Fornecedor"> | string
    telefone?: StringWithAggregatesFilter<"Fornecedor"> | string
  }

  export type ClienteCreateInput = {
    nome: string
    email: string
    senha: string
    telefone: string
    endereco?: string | null
    pedidos?: PedidoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    cliente_id?: number
    nome: string
    email: string
    senha: string
    telefone: string
    endereco?: string | null
    pedidos?: PedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    pedidos?: PedidoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    cliente_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    pedidos?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    cliente_id?: number
    nome: string
    email: string
    senha: string
    telefone: string
    endereco?: string | null
  }

  export type ClienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteUncheckedUpdateManyInput = {
    cliente_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutoCreateInput = {
    nome: string
    preco: number
    descricao: string
    qtd_estoque: number
    itens?: Item_PedidoCreateNestedManyWithoutProdutoInput
    movimentos?: MovimentoEstoqueCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    produto_id?: number
    nome: string
    preco: number
    descricao: string
    qtd_estoque: number
    itens?: Item_PedidoUncheckedCreateNestedManyWithoutProdutoInput
    movimentos?: MovimentoEstoqueUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    qtd_estoque?: IntFieldUpdateOperationsInput | number
    itens?: Item_PedidoUpdateManyWithoutProdutoNestedInput
    movimentos?: MovimentoEstoqueUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    qtd_estoque?: IntFieldUpdateOperationsInput | number
    itens?: Item_PedidoUncheckedUpdateManyWithoutProdutoNestedInput
    movimentos?: MovimentoEstoqueUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateManyInput = {
    produto_id?: number
    nome: string
    preco: number
    descricao: string
    qtd_estoque: number
  }

  export type ProdutoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    qtd_estoque?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoUncheckedUpdateManyInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    qtd_estoque?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateInput = {
    data?: Date | string
    sub_total?: Decimal | DecimalJsLike | number | string | null
    cliente: ClienteCreateNestedOneWithoutPedidosInput
    itens?: Item_PedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    pedido_id?: number
    cliente_id: number
    data?: Date | string
    sub_total?: Decimal | DecimalJsLike | number | string | null
    itens?: Item_PedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
    itens?: Item_PedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    cliente_id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    itens?: Item_PedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    pedido_id?: number
    cliente_id: number
    data?: Date | string
    sub_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type PedidoUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PedidoUncheckedUpdateManyInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    cliente_id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type Item_PedidoCreateInput = {
    data_venda?: Date | string
    quantidade: number
    preco_unitario: number
    forma_pagamento?: string | null
    valor_total?: number | null
    pedido: PedidoCreateNestedOneWithoutItensInput
    produto: ProdutoCreateNestedOneWithoutItensInput
  }

  export type Item_PedidoUncheckedCreateInput = {
    item_id?: number
    pedido_id: number
    produto_id: number
    data_venda?: Date | string
    quantidade: number
    preco_unitario: number
    forma_pagamento?: string | null
    valor_total?: number | null
  }

  export type Item_PedidoUpdateInput = {
    data_venda?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableFloatFieldUpdateOperationsInput | number | null
    pedido?: PedidoUpdateOneRequiredWithoutItensNestedInput
    produto?: ProdutoUpdateOneRequiredWithoutItensNestedInput
  }

  export type Item_PedidoUncheckedUpdateInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    data_venda?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type Item_PedidoCreateManyInput = {
    item_id?: number
    pedido_id: number
    produto_id: number
    data_venda?: Date | string
    quantidade: number
    preco_unitario: number
    forma_pagamento?: string | null
    valor_total?: number | null
  }

  export type Item_PedidoUpdateManyMutationInput = {
    data_venda?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type Item_PedidoUncheckedUpdateManyInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    data_venda?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FuncionarioCreateInput = {
    nome: string
    cargo: string
    telefone: string
  }

  export type FuncionarioUncheckedCreateInput = {
    funcionario_id?: number
    nome: string
    cargo: string
    telefone: string
  }

  export type FuncionarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type FuncionarioUncheckedUpdateInput = {
    funcionario_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type FuncionarioCreateManyInput = {
    funcionario_id?: number
    nome: string
    cargo: string
    telefone: string
  }

  export type FuncionarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type FuncionarioUncheckedUpdateManyInput = {
    funcionario_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type MovimentoEstoqueCreateInput = {
    tipo: $Enums.Tipo
    quantidade: number
    data_movimento?: Date | string
    produto: ProdutoCreateNestedOneWithoutMovimentosInput
  }

  export type MovimentoEstoqueUncheckedCreateInput = {
    estoque_id?: number
    produto_id: number
    tipo: $Enums.Tipo
    quantidade: number
    data_movimento?: Date | string
  }

  export type MovimentoEstoqueUpdateInput = {
    tipo?: EnumTipoFieldUpdateOperationsInput | $Enums.Tipo
    quantidade?: IntFieldUpdateOperationsInput | number
    data_movimento?: DateTimeFieldUpdateOperationsInput | Date | string
    produto?: ProdutoUpdateOneRequiredWithoutMovimentosNestedInput
  }

  export type MovimentoEstoqueUncheckedUpdateInput = {
    estoque_id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoFieldUpdateOperationsInput | $Enums.Tipo
    quantidade?: IntFieldUpdateOperationsInput | number
    data_movimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentoEstoqueCreateManyInput = {
    estoque_id?: number
    produto_id: number
    tipo: $Enums.Tipo
    quantidade: number
    data_movimento?: Date | string
  }

  export type MovimentoEstoqueUpdateManyMutationInput = {
    tipo?: EnumTipoFieldUpdateOperationsInput | $Enums.Tipo
    quantidade?: IntFieldUpdateOperationsInput | number
    data_movimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentoEstoqueUncheckedUpdateManyInput = {
    estoque_id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoFieldUpdateOperationsInput | $Enums.Tipo
    quantidade?: IntFieldUpdateOperationsInput | number
    data_movimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FornecedorCreateInput = {
    nome: string
    telefone: string
  }

  export type FornecedorUncheckedCreateInput = {
    fornecedor_id?: number
    nome: string
    telefone: string
  }

  export type FornecedorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type FornecedorUncheckedUpdateInput = {
    fornecedor_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type FornecedorCreateManyInput = {
    fornecedor_id?: number
    nome: string
    telefone: string
  }

  export type FornecedorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type FornecedorUncheckedUpdateManyInput = {
    fornecedor_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteOrderByRelevanceInput = {
    fields: ClienteOrderByRelevanceFieldEnum | ClienteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClienteCountOrderByAggregateInput = {
    cliente_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    cliente_id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    cliente_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    cliente_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    cliente_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Item_PedidoListRelationFilter = {
    every?: Item_PedidoWhereInput
    some?: Item_PedidoWhereInput
    none?: Item_PedidoWhereInput
  }

  export type MovimentoEstoqueListRelationFilter = {
    every?: MovimentoEstoqueWhereInput
    some?: MovimentoEstoqueWhereInput
    none?: MovimentoEstoqueWhereInput
  }

  export type Item_PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovimentoEstoqueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutoOrderByRelevanceInput = {
    fields: ProdutoOrderByRelevanceFieldEnum | ProdutoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProdutoCountOrderByAggregateInput = {
    produto_id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    descricao?: SortOrder
    qtd_estoque?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    produto_id?: SortOrder
    preco?: SortOrder
    qtd_estoque?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    produto_id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    descricao?: SortOrder
    qtd_estoque?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    produto_id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    descricao?: SortOrder
    qtd_estoque?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    produto_id?: SortOrder
    preco?: SortOrder
    qtd_estoque?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type PedidoCountOrderByAggregateInput = {
    pedido_id?: SortOrder
    cliente_id?: SortOrder
    data?: SortOrder
    sub_total?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    pedido_id?: SortOrder
    cliente_id?: SortOrder
    sub_total?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    pedido_id?: SortOrder
    cliente_id?: SortOrder
    data?: SortOrder
    sub_total?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    pedido_id?: SortOrder
    cliente_id?: SortOrder
    data?: SortOrder
    sub_total?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    pedido_id?: SortOrder
    cliente_id?: SortOrder
    sub_total?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type ProdutoScalarRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type Item_PedidoOrderByRelevanceInput = {
    fields: Item_PedidoOrderByRelevanceFieldEnum | Item_PedidoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Item_PedidoCountOrderByAggregateInput = {
    item_id?: SortOrder
    pedido_id?: SortOrder
    produto_id?: SortOrder
    data_venda?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    forma_pagamento?: SortOrder
    valor_total?: SortOrder
  }

  export type Item_PedidoAvgOrderByAggregateInput = {
    item_id?: SortOrder
    pedido_id?: SortOrder
    produto_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    valor_total?: SortOrder
  }

  export type Item_PedidoMaxOrderByAggregateInput = {
    item_id?: SortOrder
    pedido_id?: SortOrder
    produto_id?: SortOrder
    data_venda?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    forma_pagamento?: SortOrder
    valor_total?: SortOrder
  }

  export type Item_PedidoMinOrderByAggregateInput = {
    item_id?: SortOrder
    pedido_id?: SortOrder
    produto_id?: SortOrder
    data_venda?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    forma_pagamento?: SortOrder
    valor_total?: SortOrder
  }

  export type Item_PedidoSumOrderByAggregateInput = {
    item_id?: SortOrder
    pedido_id?: SortOrder
    produto_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    valor_total?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FuncionarioOrderByRelevanceInput = {
    fields: FuncionarioOrderByRelevanceFieldEnum | FuncionarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FuncionarioCountOrderByAggregateInput = {
    funcionario_id?: SortOrder
    nome?: SortOrder
    cargo?: SortOrder
    telefone?: SortOrder
  }

  export type FuncionarioAvgOrderByAggregateInput = {
    funcionario_id?: SortOrder
  }

  export type FuncionarioMaxOrderByAggregateInput = {
    funcionario_id?: SortOrder
    nome?: SortOrder
    cargo?: SortOrder
    telefone?: SortOrder
  }

  export type FuncionarioMinOrderByAggregateInput = {
    funcionario_id?: SortOrder
    nome?: SortOrder
    cargo?: SortOrder
    telefone?: SortOrder
  }

  export type FuncionarioSumOrderByAggregateInput = {
    funcionario_id?: SortOrder
  }

  export type EnumTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo | EnumTipoFieldRefInput<$PrismaModel>
    in?: $Enums.Tipo[]
    notIn?: $Enums.Tipo[]
    not?: NestedEnumTipoFilter<$PrismaModel> | $Enums.Tipo
  }

  export type MovimentoEstoqueCountOrderByAggregateInput = {
    estoque_id?: SortOrder
    produto_id?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    data_movimento?: SortOrder
  }

  export type MovimentoEstoqueAvgOrderByAggregateInput = {
    estoque_id?: SortOrder
    produto_id?: SortOrder
    quantidade?: SortOrder
  }

  export type MovimentoEstoqueMaxOrderByAggregateInput = {
    estoque_id?: SortOrder
    produto_id?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    data_movimento?: SortOrder
  }

  export type MovimentoEstoqueMinOrderByAggregateInput = {
    estoque_id?: SortOrder
    produto_id?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    data_movimento?: SortOrder
  }

  export type MovimentoEstoqueSumOrderByAggregateInput = {
    estoque_id?: SortOrder
    produto_id?: SortOrder
    quantidade?: SortOrder
  }

  export type EnumTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo | EnumTipoFieldRefInput<$PrismaModel>
    in?: $Enums.Tipo[]
    notIn?: $Enums.Tipo[]
    not?: NestedEnumTipoWithAggregatesFilter<$PrismaModel> | $Enums.Tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoFilter<$PrismaModel>
    _max?: NestedEnumTipoFilter<$PrismaModel>
  }

  export type FornecedorOrderByRelevanceInput = {
    fields: FornecedorOrderByRelevanceFieldEnum | FornecedorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FornecedorCountOrderByAggregateInput = {
    fornecedor_id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
  }

  export type FornecedorAvgOrderByAggregateInput = {
    fornecedor_id?: SortOrder
  }

  export type FornecedorMaxOrderByAggregateInput = {
    fornecedor_id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
  }

  export type FornecedorMinOrderByAggregateInput = {
    fornecedor_id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
  }

  export type FornecedorSumOrderByAggregateInput = {
    fornecedor_id?: SortOrder
  }

  export type PedidoCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PedidoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PedidoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type Item_PedidoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<Item_PedidoCreateWithoutProdutoInput, Item_PedidoUncheckedCreateWithoutProdutoInput> | Item_PedidoCreateWithoutProdutoInput[] | Item_PedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: Item_PedidoCreateOrConnectWithoutProdutoInput | Item_PedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: Item_PedidoCreateManyProdutoInputEnvelope
    connect?: Item_PedidoWhereUniqueInput | Item_PedidoWhereUniqueInput[]
  }

  export type MovimentoEstoqueCreateNestedManyWithoutProdutoInput = {
    create?: XOR<MovimentoEstoqueCreateWithoutProdutoInput, MovimentoEstoqueUncheckedCreateWithoutProdutoInput> | MovimentoEstoqueCreateWithoutProdutoInput[] | MovimentoEstoqueUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: MovimentoEstoqueCreateOrConnectWithoutProdutoInput | MovimentoEstoqueCreateOrConnectWithoutProdutoInput[]
    createMany?: MovimentoEstoqueCreateManyProdutoInputEnvelope
    connect?: MovimentoEstoqueWhereUniqueInput | MovimentoEstoqueWhereUniqueInput[]
  }

  export type Item_PedidoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<Item_PedidoCreateWithoutProdutoInput, Item_PedidoUncheckedCreateWithoutProdutoInput> | Item_PedidoCreateWithoutProdutoInput[] | Item_PedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: Item_PedidoCreateOrConnectWithoutProdutoInput | Item_PedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: Item_PedidoCreateManyProdutoInputEnvelope
    connect?: Item_PedidoWhereUniqueInput | Item_PedidoWhereUniqueInput[]
  }

  export type MovimentoEstoqueUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<MovimentoEstoqueCreateWithoutProdutoInput, MovimentoEstoqueUncheckedCreateWithoutProdutoInput> | MovimentoEstoqueCreateWithoutProdutoInput[] | MovimentoEstoqueUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: MovimentoEstoqueCreateOrConnectWithoutProdutoInput | MovimentoEstoqueCreateOrConnectWithoutProdutoInput[]
    createMany?: MovimentoEstoqueCreateManyProdutoInputEnvelope
    connect?: MovimentoEstoqueWhereUniqueInput | MovimentoEstoqueWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Item_PedidoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<Item_PedidoCreateWithoutProdutoInput, Item_PedidoUncheckedCreateWithoutProdutoInput> | Item_PedidoCreateWithoutProdutoInput[] | Item_PedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: Item_PedidoCreateOrConnectWithoutProdutoInput | Item_PedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: Item_PedidoUpsertWithWhereUniqueWithoutProdutoInput | Item_PedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: Item_PedidoCreateManyProdutoInputEnvelope
    set?: Item_PedidoWhereUniqueInput | Item_PedidoWhereUniqueInput[]
    disconnect?: Item_PedidoWhereUniqueInput | Item_PedidoWhereUniqueInput[]
    delete?: Item_PedidoWhereUniqueInput | Item_PedidoWhereUniqueInput[]
    connect?: Item_PedidoWhereUniqueInput | Item_PedidoWhereUniqueInput[]
    update?: Item_PedidoUpdateWithWhereUniqueWithoutProdutoInput | Item_PedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: Item_PedidoUpdateManyWithWhereWithoutProdutoInput | Item_PedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: Item_PedidoScalarWhereInput | Item_PedidoScalarWhereInput[]
  }

  export type MovimentoEstoqueUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<MovimentoEstoqueCreateWithoutProdutoInput, MovimentoEstoqueUncheckedCreateWithoutProdutoInput> | MovimentoEstoqueCreateWithoutProdutoInput[] | MovimentoEstoqueUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: MovimentoEstoqueCreateOrConnectWithoutProdutoInput | MovimentoEstoqueCreateOrConnectWithoutProdutoInput[]
    upsert?: MovimentoEstoqueUpsertWithWhereUniqueWithoutProdutoInput | MovimentoEstoqueUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: MovimentoEstoqueCreateManyProdutoInputEnvelope
    set?: MovimentoEstoqueWhereUniqueInput | MovimentoEstoqueWhereUniqueInput[]
    disconnect?: MovimentoEstoqueWhereUniqueInput | MovimentoEstoqueWhereUniqueInput[]
    delete?: MovimentoEstoqueWhereUniqueInput | MovimentoEstoqueWhereUniqueInput[]
    connect?: MovimentoEstoqueWhereUniqueInput | MovimentoEstoqueWhereUniqueInput[]
    update?: MovimentoEstoqueUpdateWithWhereUniqueWithoutProdutoInput | MovimentoEstoqueUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: MovimentoEstoqueUpdateManyWithWhereWithoutProdutoInput | MovimentoEstoqueUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: MovimentoEstoqueScalarWhereInput | MovimentoEstoqueScalarWhereInput[]
  }

  export type Item_PedidoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<Item_PedidoCreateWithoutProdutoInput, Item_PedidoUncheckedCreateWithoutProdutoInput> | Item_PedidoCreateWithoutProdutoInput[] | Item_PedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: Item_PedidoCreateOrConnectWithoutProdutoInput | Item_PedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: Item_PedidoUpsertWithWhereUniqueWithoutProdutoInput | Item_PedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: Item_PedidoCreateManyProdutoInputEnvelope
    set?: Item_PedidoWhereUniqueInput | Item_PedidoWhereUniqueInput[]
    disconnect?: Item_PedidoWhereUniqueInput | Item_PedidoWhereUniqueInput[]
    delete?: Item_PedidoWhereUniqueInput | Item_PedidoWhereUniqueInput[]
    connect?: Item_PedidoWhereUniqueInput | Item_PedidoWhereUniqueInput[]
    update?: Item_PedidoUpdateWithWhereUniqueWithoutProdutoInput | Item_PedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: Item_PedidoUpdateManyWithWhereWithoutProdutoInput | Item_PedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: Item_PedidoScalarWhereInput | Item_PedidoScalarWhereInput[]
  }

  export type MovimentoEstoqueUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<MovimentoEstoqueCreateWithoutProdutoInput, MovimentoEstoqueUncheckedCreateWithoutProdutoInput> | MovimentoEstoqueCreateWithoutProdutoInput[] | MovimentoEstoqueUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: MovimentoEstoqueCreateOrConnectWithoutProdutoInput | MovimentoEstoqueCreateOrConnectWithoutProdutoInput[]
    upsert?: MovimentoEstoqueUpsertWithWhereUniqueWithoutProdutoInput | MovimentoEstoqueUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: MovimentoEstoqueCreateManyProdutoInputEnvelope
    set?: MovimentoEstoqueWhereUniqueInput | MovimentoEstoqueWhereUniqueInput[]
    disconnect?: MovimentoEstoqueWhereUniqueInput | MovimentoEstoqueWhereUniqueInput[]
    delete?: MovimentoEstoqueWhereUniqueInput | MovimentoEstoqueWhereUniqueInput[]
    connect?: MovimentoEstoqueWhereUniqueInput | MovimentoEstoqueWhereUniqueInput[]
    update?: MovimentoEstoqueUpdateWithWhereUniqueWithoutProdutoInput | MovimentoEstoqueUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: MovimentoEstoqueUpdateManyWithWhereWithoutProdutoInput | MovimentoEstoqueUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: MovimentoEstoqueScalarWhereInput | MovimentoEstoqueScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutPedidosInput = {
    create?: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidosInput
    connect?: ClienteWhereUniqueInput
  }

  export type Item_PedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<Item_PedidoCreateWithoutPedidoInput, Item_PedidoUncheckedCreateWithoutPedidoInput> | Item_PedidoCreateWithoutPedidoInput[] | Item_PedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: Item_PedidoCreateOrConnectWithoutPedidoInput | Item_PedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: Item_PedidoCreateManyPedidoInputEnvelope
    connect?: Item_PedidoWhereUniqueInput | Item_PedidoWhereUniqueInput[]
  }

  export type Item_PedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<Item_PedidoCreateWithoutPedidoInput, Item_PedidoUncheckedCreateWithoutPedidoInput> | Item_PedidoCreateWithoutPedidoInput[] | Item_PedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: Item_PedidoCreateOrConnectWithoutPedidoInput | Item_PedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: Item_PedidoCreateManyPedidoInputEnvelope
    connect?: Item_PedidoWhereUniqueInput | Item_PedidoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ClienteUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidosInput
    upsert?: ClienteUpsertWithoutPedidosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutPedidosInput, ClienteUpdateWithoutPedidosInput>, ClienteUncheckedUpdateWithoutPedidosInput>
  }

  export type Item_PedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<Item_PedidoCreateWithoutPedidoInput, Item_PedidoUncheckedCreateWithoutPedidoInput> | Item_PedidoCreateWithoutPedidoInput[] | Item_PedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: Item_PedidoCreateOrConnectWithoutPedidoInput | Item_PedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: Item_PedidoUpsertWithWhereUniqueWithoutPedidoInput | Item_PedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: Item_PedidoCreateManyPedidoInputEnvelope
    set?: Item_PedidoWhereUniqueInput | Item_PedidoWhereUniqueInput[]
    disconnect?: Item_PedidoWhereUniqueInput | Item_PedidoWhereUniqueInput[]
    delete?: Item_PedidoWhereUniqueInput | Item_PedidoWhereUniqueInput[]
    connect?: Item_PedidoWhereUniqueInput | Item_PedidoWhereUniqueInput[]
    update?: Item_PedidoUpdateWithWhereUniqueWithoutPedidoInput | Item_PedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: Item_PedidoUpdateManyWithWhereWithoutPedidoInput | Item_PedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: Item_PedidoScalarWhereInput | Item_PedidoScalarWhereInput[]
  }

  export type Item_PedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<Item_PedidoCreateWithoutPedidoInput, Item_PedidoUncheckedCreateWithoutPedidoInput> | Item_PedidoCreateWithoutPedidoInput[] | Item_PedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: Item_PedidoCreateOrConnectWithoutPedidoInput | Item_PedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: Item_PedidoUpsertWithWhereUniqueWithoutPedidoInput | Item_PedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: Item_PedidoCreateManyPedidoInputEnvelope
    set?: Item_PedidoWhereUniqueInput | Item_PedidoWhereUniqueInput[]
    disconnect?: Item_PedidoWhereUniqueInput | Item_PedidoWhereUniqueInput[]
    delete?: Item_PedidoWhereUniqueInput | Item_PedidoWhereUniqueInput[]
    connect?: Item_PedidoWhereUniqueInput | Item_PedidoWhereUniqueInput[]
    update?: Item_PedidoUpdateWithWhereUniqueWithoutPedidoInput | Item_PedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: Item_PedidoUpdateManyWithWhereWithoutPedidoInput | Item_PedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: Item_PedidoScalarWhereInput | Item_PedidoScalarWhereInput[]
  }

  export type PedidoCreateNestedOneWithoutItensInput = {
    create?: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItensInput
    connect?: PedidoWhereUniqueInput
  }

  export type ProdutoCreateNestedOneWithoutItensInput = {
    create?: XOR<ProdutoCreateWithoutItensInput, ProdutoUncheckedCreateWithoutItensInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItensInput
    connect?: ProdutoWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PedidoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItensInput
    upsert?: PedidoUpsertWithoutItensInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutItensInput, PedidoUpdateWithoutItensInput>, PedidoUncheckedUpdateWithoutItensInput>
  }

  export type ProdutoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<ProdutoCreateWithoutItensInput, ProdutoUncheckedCreateWithoutItensInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItensInput
    upsert?: ProdutoUpsertWithoutItensInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutItensInput, ProdutoUpdateWithoutItensInput>, ProdutoUncheckedUpdateWithoutItensInput>
  }

  export type ProdutoCreateNestedOneWithoutMovimentosInput = {
    create?: XOR<ProdutoCreateWithoutMovimentosInput, ProdutoUncheckedCreateWithoutMovimentosInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutMovimentosInput
    connect?: ProdutoWhereUniqueInput
  }

  export type EnumTipoFieldUpdateOperationsInput = {
    set?: $Enums.Tipo
  }

  export type ProdutoUpdateOneRequiredWithoutMovimentosNestedInput = {
    create?: XOR<ProdutoCreateWithoutMovimentosInput, ProdutoUncheckedCreateWithoutMovimentosInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutMovimentosInput
    upsert?: ProdutoUpsertWithoutMovimentosInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutMovimentosInput, ProdutoUpdateWithoutMovimentosInput>, ProdutoUncheckedUpdateWithoutMovimentosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo | EnumTipoFieldRefInput<$PrismaModel>
    in?: $Enums.Tipo[]
    notIn?: $Enums.Tipo[]
    not?: NestedEnumTipoFilter<$PrismaModel> | $Enums.Tipo
  }

  export type NestedEnumTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo | EnumTipoFieldRefInput<$PrismaModel>
    in?: $Enums.Tipo[]
    notIn?: $Enums.Tipo[]
    not?: NestedEnumTipoWithAggregatesFilter<$PrismaModel> | $Enums.Tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoFilter<$PrismaModel>
    _max?: NestedEnumTipoFilter<$PrismaModel>
  }

  export type PedidoCreateWithoutClienteInput = {
    data?: Date | string
    sub_total?: Decimal | DecimalJsLike | number | string | null
    itens?: Item_PedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutClienteInput = {
    pedido_id?: number
    data?: Date | string
    sub_total?: Decimal | DecimalJsLike | number | string | null
    itens?: Item_PedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoCreateManyClienteInputEnvelope = {
    data: PedidoCreateManyClienteInput | PedidoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type PedidoUpsertWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
  }

  export type PedidoUpdateManyWithWhereWithoutClienteInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutClienteInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    pedido_id?: IntFilter<"Pedido"> | number
    cliente_id?: IntFilter<"Pedido"> | number
    data?: DateTimeFilter<"Pedido"> | Date | string
    sub_total?: DecimalNullableFilter<"Pedido"> | Decimal | DecimalJsLike | number | string | null
  }

  export type Item_PedidoCreateWithoutProdutoInput = {
    data_venda?: Date | string
    quantidade: number
    preco_unitario: number
    forma_pagamento?: string | null
    valor_total?: number | null
    pedido: PedidoCreateNestedOneWithoutItensInput
  }

  export type Item_PedidoUncheckedCreateWithoutProdutoInput = {
    item_id?: number
    pedido_id: number
    data_venda?: Date | string
    quantidade: number
    preco_unitario: number
    forma_pagamento?: string | null
    valor_total?: number | null
  }

  export type Item_PedidoCreateOrConnectWithoutProdutoInput = {
    where: Item_PedidoWhereUniqueInput
    create: XOR<Item_PedidoCreateWithoutProdutoInput, Item_PedidoUncheckedCreateWithoutProdutoInput>
  }

  export type Item_PedidoCreateManyProdutoInputEnvelope = {
    data: Item_PedidoCreateManyProdutoInput | Item_PedidoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type MovimentoEstoqueCreateWithoutProdutoInput = {
    tipo: $Enums.Tipo
    quantidade: number
    data_movimento?: Date | string
  }

  export type MovimentoEstoqueUncheckedCreateWithoutProdutoInput = {
    estoque_id?: number
    tipo: $Enums.Tipo
    quantidade: number
    data_movimento?: Date | string
  }

  export type MovimentoEstoqueCreateOrConnectWithoutProdutoInput = {
    where: MovimentoEstoqueWhereUniqueInput
    create: XOR<MovimentoEstoqueCreateWithoutProdutoInput, MovimentoEstoqueUncheckedCreateWithoutProdutoInput>
  }

  export type MovimentoEstoqueCreateManyProdutoInputEnvelope = {
    data: MovimentoEstoqueCreateManyProdutoInput | MovimentoEstoqueCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type Item_PedidoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: Item_PedidoWhereUniqueInput
    update: XOR<Item_PedidoUpdateWithoutProdutoInput, Item_PedidoUncheckedUpdateWithoutProdutoInput>
    create: XOR<Item_PedidoCreateWithoutProdutoInput, Item_PedidoUncheckedCreateWithoutProdutoInput>
  }

  export type Item_PedidoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: Item_PedidoWhereUniqueInput
    data: XOR<Item_PedidoUpdateWithoutProdutoInput, Item_PedidoUncheckedUpdateWithoutProdutoInput>
  }

  export type Item_PedidoUpdateManyWithWhereWithoutProdutoInput = {
    where: Item_PedidoScalarWhereInput
    data: XOR<Item_PedidoUpdateManyMutationInput, Item_PedidoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type Item_PedidoScalarWhereInput = {
    AND?: Item_PedidoScalarWhereInput | Item_PedidoScalarWhereInput[]
    OR?: Item_PedidoScalarWhereInput[]
    NOT?: Item_PedidoScalarWhereInput | Item_PedidoScalarWhereInput[]
    item_id?: IntFilter<"Item_Pedido"> | number
    pedido_id?: IntFilter<"Item_Pedido"> | number
    produto_id?: IntFilter<"Item_Pedido"> | number
    data_venda?: DateTimeFilter<"Item_Pedido"> | Date | string
    quantidade?: IntFilter<"Item_Pedido"> | number
    preco_unitario?: FloatFilter<"Item_Pedido"> | number
    forma_pagamento?: StringNullableFilter<"Item_Pedido"> | string | null
    valor_total?: FloatNullableFilter<"Item_Pedido"> | number | null
  }

  export type MovimentoEstoqueUpsertWithWhereUniqueWithoutProdutoInput = {
    where: MovimentoEstoqueWhereUniqueInput
    update: XOR<MovimentoEstoqueUpdateWithoutProdutoInput, MovimentoEstoqueUncheckedUpdateWithoutProdutoInput>
    create: XOR<MovimentoEstoqueCreateWithoutProdutoInput, MovimentoEstoqueUncheckedCreateWithoutProdutoInput>
  }

  export type MovimentoEstoqueUpdateWithWhereUniqueWithoutProdutoInput = {
    where: MovimentoEstoqueWhereUniqueInput
    data: XOR<MovimentoEstoqueUpdateWithoutProdutoInput, MovimentoEstoqueUncheckedUpdateWithoutProdutoInput>
  }

  export type MovimentoEstoqueUpdateManyWithWhereWithoutProdutoInput = {
    where: MovimentoEstoqueScalarWhereInput
    data: XOR<MovimentoEstoqueUpdateManyMutationInput, MovimentoEstoqueUncheckedUpdateManyWithoutProdutoInput>
  }

  export type MovimentoEstoqueScalarWhereInput = {
    AND?: MovimentoEstoqueScalarWhereInput | MovimentoEstoqueScalarWhereInput[]
    OR?: MovimentoEstoqueScalarWhereInput[]
    NOT?: MovimentoEstoqueScalarWhereInput | MovimentoEstoqueScalarWhereInput[]
    estoque_id?: IntFilter<"MovimentoEstoque"> | number
    produto_id?: IntFilter<"MovimentoEstoque"> | number
    tipo?: EnumTipoFilter<"MovimentoEstoque"> | $Enums.Tipo
    quantidade?: IntFilter<"MovimentoEstoque"> | number
    data_movimento?: DateTimeFilter<"MovimentoEstoque"> | Date | string
  }

  export type ClienteCreateWithoutPedidosInput = {
    nome: string
    email: string
    senha: string
    telefone: string
    endereco?: string | null
  }

  export type ClienteUncheckedCreateWithoutPedidosInput = {
    cliente_id?: number
    nome: string
    email: string
    senha: string
    telefone: string
    endereco?: string | null
  }

  export type ClienteCreateOrConnectWithoutPedidosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
  }

  export type Item_PedidoCreateWithoutPedidoInput = {
    data_venda?: Date | string
    quantidade: number
    preco_unitario: number
    forma_pagamento?: string | null
    valor_total?: number | null
    produto: ProdutoCreateNestedOneWithoutItensInput
  }

  export type Item_PedidoUncheckedCreateWithoutPedidoInput = {
    item_id?: number
    produto_id: number
    data_venda?: Date | string
    quantidade: number
    preco_unitario: number
    forma_pagamento?: string | null
    valor_total?: number | null
  }

  export type Item_PedidoCreateOrConnectWithoutPedidoInput = {
    where: Item_PedidoWhereUniqueInput
    create: XOR<Item_PedidoCreateWithoutPedidoInput, Item_PedidoUncheckedCreateWithoutPedidoInput>
  }

  export type Item_PedidoCreateManyPedidoInputEnvelope = {
    data: Item_PedidoCreateManyPedidoInput | Item_PedidoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutPedidosInput = {
    update: XOR<ClienteUpdateWithoutPedidosInput, ClienteUncheckedUpdateWithoutPedidosInput>
    create: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutPedidosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutPedidosInput, ClienteUncheckedUpdateWithoutPedidosInput>
  }

  export type ClienteUpdateWithoutPedidosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteUncheckedUpdateWithoutPedidosInput = {
    cliente_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Item_PedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: Item_PedidoWhereUniqueInput
    update: XOR<Item_PedidoUpdateWithoutPedidoInput, Item_PedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<Item_PedidoCreateWithoutPedidoInput, Item_PedidoUncheckedCreateWithoutPedidoInput>
  }

  export type Item_PedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: Item_PedidoWhereUniqueInput
    data: XOR<Item_PedidoUpdateWithoutPedidoInput, Item_PedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type Item_PedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: Item_PedidoScalarWhereInput
    data: XOR<Item_PedidoUpdateManyMutationInput, Item_PedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type PedidoCreateWithoutItensInput = {
    data?: Date | string
    sub_total?: Decimal | DecimalJsLike | number | string | null
    cliente: ClienteCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateWithoutItensInput = {
    pedido_id?: number
    cliente_id: number
    data?: Date | string
    sub_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type PedidoCreateOrConnectWithoutItensInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
  }

  export type ProdutoCreateWithoutItensInput = {
    nome: string
    preco: number
    descricao: string
    qtd_estoque: number
    movimentos?: MovimentoEstoqueCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutItensInput = {
    produto_id?: number
    nome: string
    preco: number
    descricao: string
    qtd_estoque: number
    movimentos?: MovimentoEstoqueUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutItensInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutItensInput, ProdutoUncheckedCreateWithoutItensInput>
  }

  export type PedidoUpsertWithoutItensInput = {
    update: XOR<PedidoUpdateWithoutItensInput, PedidoUncheckedUpdateWithoutItensInput>
    create: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutItensInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutItensInput, PedidoUncheckedUpdateWithoutItensInput>
  }

  export type PedidoUpdateWithoutItensInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateWithoutItensInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    cliente_id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ProdutoUpsertWithoutItensInput = {
    update: XOR<ProdutoUpdateWithoutItensInput, ProdutoUncheckedUpdateWithoutItensInput>
    create: XOR<ProdutoCreateWithoutItensInput, ProdutoUncheckedCreateWithoutItensInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutItensInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutItensInput, ProdutoUncheckedUpdateWithoutItensInput>
  }

  export type ProdutoUpdateWithoutItensInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    qtd_estoque?: IntFieldUpdateOperationsInput | number
    movimentos?: MovimentoEstoqueUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutItensInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    qtd_estoque?: IntFieldUpdateOperationsInput | number
    movimentos?: MovimentoEstoqueUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateWithoutMovimentosInput = {
    nome: string
    preco: number
    descricao: string
    qtd_estoque: number
    itens?: Item_PedidoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutMovimentosInput = {
    produto_id?: number
    nome: string
    preco: number
    descricao: string
    qtd_estoque: number
    itens?: Item_PedidoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutMovimentosInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutMovimentosInput, ProdutoUncheckedCreateWithoutMovimentosInput>
  }

  export type ProdutoUpsertWithoutMovimentosInput = {
    update: XOR<ProdutoUpdateWithoutMovimentosInput, ProdutoUncheckedUpdateWithoutMovimentosInput>
    create: XOR<ProdutoCreateWithoutMovimentosInput, ProdutoUncheckedCreateWithoutMovimentosInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutMovimentosInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutMovimentosInput, ProdutoUncheckedUpdateWithoutMovimentosInput>
  }

  export type ProdutoUpdateWithoutMovimentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    qtd_estoque?: IntFieldUpdateOperationsInput | number
    itens?: Item_PedidoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutMovimentosInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    qtd_estoque?: IntFieldUpdateOperationsInput | number
    itens?: Item_PedidoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type PedidoCreateManyClienteInput = {
    pedido_id?: number
    data?: Date | string
    sub_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type PedidoUpdateWithoutClienteInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    itens?: Item_PedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutClienteInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    itens?: Item_PedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutClienteInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type Item_PedidoCreateManyProdutoInput = {
    item_id?: number
    pedido_id: number
    data_venda?: Date | string
    quantidade: number
    preco_unitario: number
    forma_pagamento?: string | null
    valor_total?: number | null
  }

  export type MovimentoEstoqueCreateManyProdutoInput = {
    estoque_id?: number
    tipo: $Enums.Tipo
    quantidade: number
    data_movimento?: Date | string
  }

  export type Item_PedidoUpdateWithoutProdutoInput = {
    data_venda?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableFloatFieldUpdateOperationsInput | number | null
    pedido?: PedidoUpdateOneRequiredWithoutItensNestedInput
  }

  export type Item_PedidoUncheckedUpdateWithoutProdutoInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    data_venda?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type Item_PedidoUncheckedUpdateManyWithoutProdutoInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    data_venda?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MovimentoEstoqueUpdateWithoutProdutoInput = {
    tipo?: EnumTipoFieldUpdateOperationsInput | $Enums.Tipo
    quantidade?: IntFieldUpdateOperationsInput | number
    data_movimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentoEstoqueUncheckedUpdateWithoutProdutoInput = {
    estoque_id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoFieldUpdateOperationsInput | $Enums.Tipo
    quantidade?: IntFieldUpdateOperationsInput | number
    data_movimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentoEstoqueUncheckedUpdateManyWithoutProdutoInput = {
    estoque_id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoFieldUpdateOperationsInput | $Enums.Tipo
    quantidade?: IntFieldUpdateOperationsInput | number
    data_movimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Item_PedidoCreateManyPedidoInput = {
    item_id?: number
    produto_id: number
    data_venda?: Date | string
    quantidade: number
    preco_unitario: number
    forma_pagamento?: string | null
    valor_total?: number | null
  }

  export type Item_PedidoUpdateWithoutPedidoInput = {
    data_venda?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableFloatFieldUpdateOperationsInput | number | null
    produto?: ProdutoUpdateOneRequiredWithoutItensNestedInput
  }

  export type Item_PedidoUncheckedUpdateWithoutPedidoInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    data_venda?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type Item_PedidoUncheckedUpdateManyWithoutPedidoInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    data_venda?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableFloatFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}