// Define a generic interface for database items
interface DatabaseItem {
    id: number;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // Define a generic class for managing items in a "database"
  class DatabaseManager<T extends DatabaseItem> {
    private items: T[] = [];
  
    // Add a new item
    // This allows us to create a new item without specifying id, createdAt, and updatedAt, which are managed by the DatabaseManager itself.
    add(item: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): T {
      const newItem = {
        ...item,
        id: this.generateId(),
        createdAt: new Date(),
        updatedAt: new Date()
      } as T;
  
      this.items.push(newItem);
      return newItem;
    }
  
    // Get an item by id
    get(id: number): T | undefined {
      return this.items.find(item => item.id === id);
    }
  
    // Update an item
    update(id: number, updateData: Partial<Omit<T, 'id' | 'createdAt' | 'updatedAt'>>): T | undefined {
      const index = this.items.findIndex(item => item.id === id);
      if (index !== -1) {
        this.items[index] = {
          ...this.items[index],
          ...updateData,
          updatedAt: new Date()
        };
        return this.items[index];
      }
      return undefined;
    }
  
    // Delete an item
    delete(id: number): boolean {
      const index = this.items.findIndex(item => item.id === id);
      if (index !== -1) {
        this.items.splice(index, 1);
        return true;
      }
      return false;
    }
  
    // List all items
    list(): T[] {
      return this.items;
    }
  
    private generateId(): number {
      return this.items.length > 0
        ? Math.max(...this.items.map(item => item.id)) + 1
        : 1;
    }
  }
  
  // 1. Example usage: Managing blog posts
  interface BlogPost extends DatabaseItem {
    title: string;
    content: string;
    author: string;
  }
  
  const blogManager = new DatabaseManager<BlogPost>();
  
  // Add a new blog post
  const newPost = blogManager.add({
    title: "Understanding TypeScript Generics",
    content: "Generics in TypeScript provide a way to create reusable components...",
    author: "John Doe"
  });
  
  console.log("New post created:", newPost);
  
  // Update the blog post
  const updatedPost = blogManager.update(newPost.id, {
    title: "Mastering TypeScript Generics",
    content: "Generics in TypeScript are a powerful feature that allow..."
  });
  
  console.log("Updated post:", updatedPost);
  
  // Get the blog post
  const retrievedPost = blogManager.get(newPost.id);
  console.log("Retrieved post:", retrievedPost);
  
  // List all blog posts
  console.log("All posts:", blogManager.list());
  
  // Delete the blog post
  const deleted = blogManager.delete(newPost.id);
  console.log("Post deleted:", deleted);
  
  // 2. Example usage: Managing products in an e-commerce system
  interface Product extends DatabaseItem {
    name: string;
    price: number;
    stockQuantity: number;
  }
  
  const productManager = new DatabaseManager<Product>();
  
  // Add a new product
  const newProduct = productManager.add({
    name: "Wireless Mouse",
    price: 29.99,
    stockQuantity: 100
  });
  
  console.log("New product added:", newProduct);
  
  // Update product stock
  const updatedProduct = productManager.update(newProduct.id, {
    stockQuantity: 95
  });
  
  console.log("Updated product:", updatedProduct);
  
  // List all products
  console.log("All products:", productManager.list());