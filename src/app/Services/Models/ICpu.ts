export interface Cpu {
  message: 'string';
  data: [
    {
      wattage: number;
      product_id: number;
      brand: 'string';
      model: 'string';
      category: 'string';
      current_price: number;
      stock_count: number;
      max_memory_limit: number;
      generation: 'string';
      microarchitecture: 'string';
      num_cores: number;
      num_threads: number;
      base_frequency: number;
      boost_frequency: number;
    }
  ];
}
