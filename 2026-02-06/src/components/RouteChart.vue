<script setup lang="ts">
type Station = { type: "station"; name: string };
type Line = { type: "line"; name: string; time?: number; color?: string };
type RouteItem = Station | Line;

const { size = "sm" } = defineProps<{
  items: RouteItem[];
  size?: "sm" | "lg";
}>();

const getLineColor = (item: RouteItem) => {
  if (item.type === "line" && item.color) return item.color;
  return "var(--color-blue)";
};
</script>

<template>
  <div class="route-chart" :class="size">
    <template v-for="(item, i) in items" :key="i">
      <div v-if="item.type === 'station'" class="station">
        <div
          class="dot"
          :style="{ background: getLineColor(items[i + 1] || item) }"
        />
        <span class="name">{{ item.name }}</span>
      </div>
      <div v-else-if="item.type === 'line'" class="line-segment">
        <div class="rail" :style="{ background: getLineColor(item) }" />
        <div class="line-info">
          <span class="line-name">{{ item.name }}</span>
          <span v-if="item.time" class="time">{{ item.time }}分</span>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.route-chart {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  width: 100%;
  padding: 4px;

  &.sm {
    font-size: 1em;

    .dot {
      width: 14px;
      height: 14px;
      border-width: 2px;
    }

    .station {
      gap: 8px;
    }

    .line-segment {
      height: 28px;
      padding-left: 6px;
      gap: 8px;
    }

    .rail {
      width: 4px;
    }
  }

  &.lg {
    font-size: 1.5em;
    gap: 4px;

    .dot {
      width: 24px;
      height: 24px;
      border-width: 4px;
    }

    .station {
      gap: 16px;
    }

    .line-segment {
      height: 48px;
      padding-left: 10px;
      gap: 16px;
    }

    .rail {
      width: 6px;
    }

    .line-info {
      gap: 12px;
    }

    .time {
      font-size: 0.7em;
    }
  }
}

.station {
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 1;
}

.dot {
  border-radius: 50%;
  border-style: solid;
  border-color: var(--color-white);
  flex-shrink: 0;
}

.name {
  font-weight: bold;
  white-space: nowrap;
}

.line-segment {
  display: flex;
  align-items: center;
  gap: 6px;
}

.rail {
  height: 100%;
  flex-shrink: 0;
}

.line-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.line-name {
  opacity: 0.9;
  white-space: nowrap;
}

.time {
  opacity: 0.6;
  white-space: nowrap;
}
</style>
