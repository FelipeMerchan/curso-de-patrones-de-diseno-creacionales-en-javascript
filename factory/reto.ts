/**
 *
 * Factory Method challenge:
 *
 * Make a HttpAdapters factory.
 *
 * Steps followed to implement the solution:
 *
 * 1. Add HttpAdapter base product class
 * 2. Add concrete implementation of HttpAdapter: RestHttpAdapter
 * 3. Add HttpAdapterFactory base factory class
 * 4. Add concrete implementation of HttpAdapterFactory: RestHttpAdapterFactory
 */

// ----- HttpAdapter base class -----
interface HttpAdapter {
  get(): void;
  post(): void;
  put(): void;
  delete(): void;
}

// ----- Concrete product -----
class RestHttpAdapter implements HttpAdapter {
  get() {
    console.log('[GET]');
  }

  post() {
    console.log('[POST]');
  }

  put() {
    console.log('[PUT]');
  }

  delete() {
    console.log('[DELETE]');
  }
}

// ----- Base Factory -----
interface HttpAdapterFactory {
  makeHttpAdapter(): HttpAdapter;
}

// ----- Concrete Factory -----
class RestHttpAdapterFactory implements HttpAdapterFactory {
  makeHttpAdapter() {
    return new RestHttpAdapter();
  }
}

/**
 * Main function
 * @param {HttpAdapterFactory} factory HttpAdapter factory
 */
function appFactory(factory: HttpAdapterFactory) {
  console.log('--- [TS] Calling appFactory ---\n');
  if (!factory) {
    console.log('--- No factory provided ---');
    return;
  }

  const adapter: HttpAdapter = factory.makeHttpAdapter();
  adapter.get();
  adapter.post();
  adapter.put();
  adapter.delete();
}

appFactory(new RestHttpAdapterFactory());
