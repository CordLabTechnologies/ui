import * as React from "react"
import { Hero } from "../../components/marketing/Hero"
import { ProductCard } from "../../components/ecommerce/ProductCard"
import { FilterPanel } from "../../components/ecommerce/FilterPanel"
import { PromoCode } from "../../components/ecommerce/PromoCode"
import { Badge } from "../../components/elements/Badge"
import { Input } from "../../components/elements/Input"
import { Button } from "../../components/elements/Button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "../../components/layout/Sheet"
import { ShoppingCart, Search, Menu, User, Filter } from "lucide-react"

export const EcommerceStorefront = () => {
  const [isCartOpen, setIsCartOpen] = React.useState(false)

  const products = [
    {
      id: "1",
      title: "Sony WH-1000XM5",
      description: "Wireless Noise Cancelling Headphones",
      price: 348.00,
      originalPrice: 399.99,
      imageSrc: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=600&auto=format&fit=crop",
      badge: <Badge variant="destructive">SALE</Badge>,
      rating: 4.8,
      reviewsCount: 1240
    },
    {
      id: "2",
      title: "Keychron Q1 Pro",
      description: "Custom Wireless Mechanical Keyboard",
      price: 199.00,
      imageSrc: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop",
      badge: <Badge className="bg-blue-500 hover:bg-blue-600">NEW</Badge>,
      rating: 4.9,
      reviewsCount: 85
    },
    {
      id: "3",
      title: "Logitech MX Master 3S",
      description: "Advanced Wireless Mouse",
      price: 99.99,
      imageSrc: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=600&auto=format&fit=crop",
      rating: 4.7,
      reviewsCount: 3420
    },
    {
      id: "4",
      title: "LG UltraGear 27\"",
      description: "Nano IPS 1ms 144Hz Monitor",
      price: 349.99,
      originalPrice: 399.99,
      imageSrc: "https://images.unsplash.com/photo-1527443224154-c4a3942d4aff?q=80&w=600&auto=format&fit=crop",
      rating: 4.6,
      reviewsCount: 512
    },
    {
      id: "5",
      title: "Apple AirPods Pro",
      description: "2nd Generation with MagSafe",
      price: 249.00,
      imageSrc: "https://images.unsplash.com/photo-1606220588913-b3eea4141249?q=80&w=600&auto=format&fit=crop",
      rating: 4.9,
      reviewsCount: 8900
    },
    {
      id: "6",
      title: "Elgato Stream Deck",
      description: "15 LCD Keys Content Creation Controller",
      price: 149.99,
      imageSrc: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?q=80&w=600&auto=format&fit=crop",
      rating: 4.8,
      reviewsCount: 1205
    }
  ]

  const categories = [
    { id: 'audio', label: 'Audio & Headphones', count: 42 },
    { id: 'peripherals', label: 'Peripherals', count: 85 },
    { id: 'monitors', label: 'Monitors', count: 16 },
    { id: 'accessories', label: 'Accessories', count: 124 },
  ]

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden p-2 -ml-2 text-[var(--color-foreground)]">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <SheetTitle>Menu</SheetTitle>
                <nav className="flex flex-col gap-4 mt-6 font-medium text-[var(--color-foreground)]">
                  <a href="#" className="transition-colors hover:text-[var(--color-primary)]">Products</a>
                  <a href="#" className="transition-colors hover:text-[var(--color-primary)]">Categories</a>
                  <a href="#" className="transition-colors hover:text-[var(--color-primary)]">Deals</a>
                </nav>
              </SheetContent>
            </Sheet>
            <div className="text-xl font-bold tracking-tighter text-[var(--color-primary)]">
              TechStore.
            </div>
            <nav className="hidden md:flex items-center gap-6 ml-8 text-sm font-medium text-[var(--color-muted-foreground)]">
              <a href="#" className="hover:text-[var(--color-foreground)] text-[var(--color-foreground)] transition-colors">Products</a>
              <a href="#" className="hover:text-[var(--color-foreground)] transition-colors">Categories</a>
              <a href="#" className="hover:text-[var(--color-foreground)] transition-colors">Deals</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[var(--color-muted-foreground)]" />
              <Input type="search" placeholder="Search products..." className="w-64 pl-9 rounded-full bg-[var(--color-secondary)] border-none" />
            </div>
            <button className="p-2 text-[var(--color-foreground)] hover:bg-[var(--color-secondary)] rounded-full transition-colors hidden sm:block">
              <User className="h-5 w-5" />
            </button>
            <button 
              className="relative p-2 text-[var(--color-foreground)] hover:bg-[var(--color-secondary)] rounded-full transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-primary)] text-[10px] font-bold text-[var(--color-primary-foreground)]">
                2
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Hero 
        title="Next-Gen Audio is Here"
        description="Experience silence like never before with the new Sony WH-1000XM5. Now up to 15% off for a limited time."
        primaryAction={<Button variant="primary">Shop Sale</Button>}
        secondaryAction={<Button variant="outline">Learn More</Button>}
        badge="SUMMER SALE"
        image={<img src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1200&auto=format&fit=crop" alt="Sony Headphones" className="rounded-xl shadow-2xl object-cover w-full max-h-[500px]" />}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Mobile Filter Button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Filter className="mr-2 h-4 w-4" /> Filters & Categories
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[85vh] overflow-y-auto">
                <SheetTitle>Filters</SheetTitle>
                <div className="mt-6">
                  <FilterPanel 
                    groups={[{
                      id: 'categories',
                      title: 'Categories',
                      defaultExpanded: true,
                      options: categories.map(c => ({ label: c.label, value: c.id, count: c.count }))
                    }]}
                  />
                  <div className="mt-8">
                    <PromoCode onSubmit={async (code) => { console.log('Applied:', code); return true; }} />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Left Sidebar Filters (Desktop) */}
          <aside className="w-64 shrink-0 hidden md:block">
            <FilterPanel 
              groups={[{
                id: 'categories',
                title: 'Categories',
                defaultExpanded: true,
                options: categories.map(c => ({ label: c.label, value: c.id, count: c.count }))
              }]}
            />

            <div className="mt-8">
              <PromoCode 
                onSubmit={async (code) => { console.log('Applied:', code); return true; }}
              />
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[var(--color-foreground)]">All Products</h2>
              <span className="text-sm text-[var(--color-muted-foreground)]">Showing 6 of 124 results</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard 
                  key={product.id}
                  {...product}
                  onAddToCart={() => alert(`Added ${product.title} to cart!`)}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

EcommerceStorefront.displayName = "EcommerceStorefront"
