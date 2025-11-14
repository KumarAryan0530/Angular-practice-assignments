import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ServicesComponent } from './pages/services/services';
import { ProductsComponent } from './pages/products/products';
import { ContactComponent } from './pages/contact/contact';
import { BlogComponent } from './pages/blog/blog';
import { PortfolioComponent } from './pages/portfolio/portfolio';
import { PricingComponent } from './pages/pricing/pricing';
import { FaqComponent } from './pages/faq/faq';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'about', component: AboutComponent, data: { title: 'About Us' } },
  { path: 'services', component: ServicesComponent, data: { title: 'Services' } },
  { path: 'products', component: ProductsComponent, data: { title: 'Products' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact Us' } },
  { path: 'blog', component: BlogComponent, data: { title: 'Blog' } },
  { path: 'portfolio', component: PortfolioComponent, data: { title: 'Portfolio' } },
  { path: 'pricing', component: PricingComponent, data: { title: 'Pricing' } },
  { path: 'faq', component: FaqComponent, data: { title: 'FAQ' } },
  { path: '**', component: NotFoundComponent, data: { title: '404 - Page Not Found' } }
];
