# doc2

```javascript
// JavaScript
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError()
  }
  return a + b
}
```

```sql
-- SQL
SELECT a, b, c
  FROM table1
  WHERE id = 1
```

```ruby
# Ruby
class ImportMap::Commands < Thor
  include Thor.Actions
  
  def pin(*)
    package.download(package, url)
  end
  
  private
  
  def packager
    @package ||= Importer.Packager.new
  end
end
```

```python
# Python
def add(a, b):
  return a + b
```

