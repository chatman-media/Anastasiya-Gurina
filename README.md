# Anastasiya Gurina - Photography Portfolio

**[Русская версия](#русская-версия) ниже**

## English Version

A modern, responsive photography portfolio website built with React, TypeScript, and Tailwind CSS. Features include internationalization (English/Russian), theme switching (light/dark/system), and an interactive photo gallery.

### 🌟 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Internationalization**: Full support for English and Russian languages
- **Theme Switching**: Choose between light, dark, or system theme
- **Photo Gallery**: Interactive gallery with modal viewing and navigation
- **Modern UI**: Clean, professional design using Tailwind CSS
- **Fast Loading**: Built with Vite for optimal performance

### 🚀 Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite with React Server Components
- **UI Components**: Radix UI components
- **Icons**: Lucide React
- **Internationalization**: i18next
- **Styling**: Tailwind CSS with class-variance-authority
- **Package Manager**: Bun

### 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # UI components (Button, Dropdown, etc.)
│   ├── header.tsx      # Navigation header
│   ├── hero.tsx        # Hero section
│   ├── about.tsx       # About section
│   ├── photo-gallery.tsx # Photo gallery component
│   ├── contact.tsx     # Contact section
│   ├── footer.tsx      # Footer
│   ├── theme-provider.tsx # Theme context provider
│   ├── theme-switcher.tsx # Theme toggle component
│   └── language-switcher.tsx # Language toggle component
├── locales/            # Translation files
│   ├── en/translation.json
│   └── ru/translation.json
├── lib/                # Utility functions
└── root.tsx            # Main application component
```

### 🛠️ Development

1. **Install dependencies**:
   ```bash
   bun install
   ```

2. **Start development server**:
   ```bash
   bun run dev
   ```

3. **Build for production**:
   ```bash
   bun run build
   ```

4. **Preview production build**:
   ```bash
   bun run preview
   ```

### 🎨 Customization

- **Photos**: Replace images in `public/photos/` directory
- **Content**: Update translation files in `src/locales/`
- **Styling**: Modify Tailwind classes in components
- **Colors**: Update theme configuration in `tailwind.config.js`

### 📱 Deployment

The project is ready for deployment on various platforms:
- **GitHub Pages**: Automatically deploys via GitHub Actions when pushing to main branch
- **Netlify**: Connect GitHub repository
- **Vercel**: Import from GitHub
- **Custom Server**: Build and serve static files

#### GitHub Pages Configuration

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site to GitHub Pages. Make sure to:
1. Enable GitHub Pages in your repository settings
2. Set the source to "GitHub Actions"
3. Push to the main branch to trigger deployment

---

## Русская версия

Современный адаптивный сайт-портфолио для фотографа, созданный с использованием React, TypeScript и Tailwind CSS. Включает поддержку двух языков (русский/английский), переключение тем (светлая/темная/системная) и интерактивную фотогалерею.

### 🌟 Возможности

- **Адаптивный дизайн**: Оптимизирован для компьютеров, планшетов и мобильных устройств
- **Многоязычность**: Полная поддержка русского и английского языков
- **Переключение тем**: Возможность выбора между светлой, темной или системной темой
- **Фотогалерея**: Интерактивная галерея с модальным просмотром и навигацией
- **Современный интерфейс**: Чистый, профессиональный дизайн с использованием Tailwind CSS
- **Быстрая загрузка**: Создано с помощью Vite для оптимальной производительности

### 🚀 Используемые технологии

- **Фронтенд**: React 18, TypeScript, Tailwind CSS
- **Инструмент сборки**: Vite с React Server Components
- **UI компоненты**: Radix UI компоненты
- **Иконки**: Lucide React
- **Интернационализация**: i18next
- **Стилизация**: Tailwind CSS с class-variance-authority
- **Менеджер пакетов**: Bun

### 📁 Структура проекта

```
src/
├── components/          # React компоненты
│   ├── ui/             # UI компоненты (Кнопки, Выпадающие меню и т.д.)
│   ├── header.tsx      # Навигационный заголовок
│   ├── hero.tsx        # Геройская секция
│   ├── about.tsx       # Секция "Обо мне"
│   ├── photo-gallery.tsx # Компонент фотогалереи
│   ├── contact.tsx     # Секция контактов
│   ├── footer.tsx      # Подвал
│   ├── theme-provider.tsx # Провайдер контекста темы
│   ├── theme-switcher.tsx # Компонент переключения темы
│   └── language-switcher.tsx # Компонент переключения языка
├── locales/            # Файлы переводов
│   ├── en/translation.json
│   └── ru/translation.json
├── lib/                # Утилитарные функции
└── root.tsx            # Главный компонент приложения
```

### 🛠️ Разработка

1. **Установка зависимостей**:
   ```bash
   bun install
   ```

2. **Запуск сервера разработки**:
   ```bash
   bun run dev
   ```

3. **Сборка для продакшена**:
   ```bash
   bun run build
   ```

4. **Предпросмотр продакшн-сборки**:
   ```bash
   bun run preview
   ```

### 🎨 Настройка

- **Фотографии**: Замените изображения в директории `public/photos/`
- **Контент**: Обновите файлы переводов в `src/locales/`
- **Стилизация**: Измените классы Tailwind в компонентах
- **Цвета**: Обновите конфигурацию темы в `tailwind.config.js`

### 📱 Развертывание

Проект готов к развертыванию на различных платформах:
- **GitHub Pages**: Автоматическое развёртывание через GitHub Actions при пуше в main ветку
- **Netlify**: Подключите репозиторий GitHub
- **Vercel**: Импортируйте из GitHub
- **Собственный сервер**: Соберите и обслуживайте статические файлы

#### Конфигурация GitHub Pages

Проект включает рабочий процесс GitHub Actions (`.github/workflows/deploy.yml`), который автоматически собирает и разворачивает сайт на GitHub Pages. Убедитесь, что:
1. Включили GitHub Pages в настройках репозитория
2. Установили источник на "GitHub Actions"
3. Отправили изменения в ветку main для запуска деплоя

---

### 📄 License

MIT License - feel free to use this template for your own portfolio!
